

export default function validation(values) {
    let errors = {};

    if (!values.username.trim()) {
        errors.username = "username required";
    }

    if (!values.mobileno.trim()) {
        errors.mobileno = "mobile number required";
    }
    else if (!/^\d{10}$/.test(values.mobileno)) {
        errors.mobileno = "mobile no is not valid";
    }

    if (!values.useremail.trim()) {
        errors.useremail = "Email required";
    }
    else if (!/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(values.useremail)) {
        errors.useremail = "Email is not valid";
    }

    if (!values.userpassword.trim()) {
        errors.userpassword = "password is required"
    }
    else if (values.userpassword.length < 6) {
        errors.userpassword = "password needs to be 6 characters or more";
    }

    if (!values.confirmpassword.trim()) {
        errors.confirmpassword = "password is required"
    }
    else if (values.confirmpassword !== values.userpassword) {
        errors.confirmpassword = "password do not match";
    }
    return errors;
}