const validate = (values) => {
  const errors = {};
  

  if (!values.Phonenumber) {
    errors.Phonenumber = 'MobileNumber Required';
  } else if (values.Phonenumber && !/^([0-9]\d{9})$/i.test(values.Phonenumber)) {
    errors.Phonenumber = 'Invalid mobile number, must be 10 digits';
  }

  

  if (!values.Firstname) {
    errors.Firstname = 'Firstname Required';
  }

    if (!values.Lastname) {
        errors.Lastname = 'Lastname Required';
    }

    if (!values.Currentaddress) {
        errors.Currentaddress = 'Current Address Required';
    }

  if (!values.Permanentaddress) {
    errors.Permanentaddress = ' Permanent Address Required';
  }


    if (!values.Email) {
        errors.Email = ' Email Address Required';
    }

    if (!values.Course) {
        errors.Course = ' Course Required';
    }

    if (!values.Percentage) {
        errors.Percentage = ' Percentage Required';
    }


    if (!values.College) {
        errors.College = ' College/University Required';
    }

    if (!values.Year) {
        errors.Year = ' Year Required';
    }

    if (!values.Course) {
        errors.Course = ' Course Required';
    }

    if (!values.Company) {
        errors.Company = ' CompanyName Required';
    }

    if (!values.Linkedin) {
        errors.Linkedin = ' Linkedin Profile Required';
    }

    if (!values.Designation) {
        errors.Designation = ' Designation Required';
    }

    if (!values.Facebook) {
        errors.Facebook = ' Facebook Profile Required';
    }

    if (!values.Github) {
        errors.Github = ' Github Profile Required';
    }

    if (!values.Hobbies) {
        errors.Hobbies = ' Hobbies Required';
    }


  return errors;
};

export default validate;
