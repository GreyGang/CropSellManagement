import swal from "sweetalert";
import "./Alert.style.css";

export const Alert = () => {
  swal({
    text: "Just a Demo!!",
    buttons: {
      cancel: "Cancel",
      yes: {
        value: "yes",
        text: "Yes",
      },
    },
    closeOnClickOutside: false,
  }).then((value) => {
    if (value) {
      swal("Done", {
        icon: "success",
      });
    } else {
      swal("You tapped cancel", {
        icon: "warning",
      });
    }
  });
};
