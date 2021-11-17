import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Toast } from "bootstrap";

const HouseFilter = ({ allHouses }) => {
  const [toast, setToast] = useState(false);
  const toastRef = useRef();

  const navigate = useNavigate();

  useEffect(() => {
    let myToast = toastRef.current;
    console.log("TOAST REF: ", toastRef);
    let bsToast = Toast.getInstance(myToast);

    console.log("BS TOAST: ", bsToast);

    if (!bsToast) {
      // initialize Toast
      bsToast = new Toast(myToast, {
        autohide: true,
        closeButton: true,
        delay: 3000,
        onclose: () => {
          //alert("TOASTED");
        },
      });
      // hide after init
      bsToast.hide();
      setToast(false);
    } else {
      console.log("toast 1: ", toast);
      // toggle
      toast ? bsToast.show() : bsToast.hide();
      setToast(true);
    }
  }, [toast]);

  const countries = allHouses
    ? Array.from(new Set(allHouses.map((h) => h.country)))
    : [];

  //countries.unshift(null); //makes first value blank

  const onSearchChange = (e) => {
    const country = e.target.value;
    if (country !== "NA") {
      navigate(`/searchresults/${country}`, { replace: true });
    } else {
      navigate(`/searchresults/${country}`, { replace: true });
      console.log("SHOW TOAST");
      //toggleShow();
      console.log("TOAST: ", toast);
      setToast((toast) => !toast);
      //console.log("RESET TOAST: ", toast);
    }
  };

  return (
    //<Toast onClose={() => setShow(false)} show={show} delay={3000} autohide>

    <>
      <div
        className="toast position-absolute top: -100; right: 0; m-4"
        role="alert"
        ref={toastRef}
      >
        <div className="toast-header">
          <strong className="me-auto">Error</strong>
          <small>11 mins ago</small>
          {/* <div onClick={() => setToast(false)}>X</div> */}

          <div
            className="toast-header-spacer ml-2 mb-1 close"
            /*type="button"
            data-dismiss="toast"
            aria-label="Close" */
            onClick={() => setToast(false)}
          >
            <span aria-hidden="true">&times;</span>
          </div>
        </div>
        <div className="toast-body">No Country was selected</div>
      </div>

      <div className="row mt-3">
        <div className="offset-md-2 col-md-4">
          Look for your dream house in country:
        </div>
        <div className="col-md-4 mb-3">
          <select className="form-select" onChange={onSearchChange}>
            <option key={0} value={"NA"}>
              Select a Country
            </option>
            {countries.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>
      </div>
    </>
  );
};

export default HouseFilter;
