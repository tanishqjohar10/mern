import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import validate from '../validation/validation';
import FormInput from '../components/FormInput'
import {
  mobile,
  captialize,
  age
} from '../validation/normalize';
import {
  Button,
  Card,
  CardBody,
  Col,
  FormGroup
} from 'reactstrap';


const EducationalDetailsForm = (props) => {
    const { handleSubmit, previousPage } = props;
  return (
    <form onSubmit={handleSubmit}>
      <Col sm="12">
        <Card className="card-border">
          <CardBody>
            <Field
              name="Course"
              type="text"
              component={FormInput}
              label="Course "
              inputPlaceHolder="Enter Course"
              normalize={captialize}
            />
            <FormGroup row>
              <Col xs="12" lg="6">
                <Field
                  name="College"
                  type="text"
                  component={FormInput}
                  label="College/ University"
                  inputPlaceHolder="Enter College/ University name"
                  normalize={captialize}
                />
              </Col>
              <Col xs="12" lg="6">
                <Field
                  name="Year"
                  type="text"
                  component={FormInput}
                  label="Year "
                  inputPlaceHolder="Enter Year"
                  normalize={mobile}
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Col xs="12" lg="6">
                <Field
                  name="dob"
                  type="date"
                  component={FormInput}
                  label="Date of Birth"
                />
              </Col>

              <Col xs="12" lg="6">
                <Field
                  name="Percentage"
                  type="text"
                  component={FormInput}
                  label="Percentage"
                  inputPlaceHolder="Enter Percentage/ CGPA"
                  normalize={age}
                />
              </Col>
            </FormGroup>
          </CardBody>
                  <div style={{ paddingBottom: 30 }}>
                      <Button color="primary" className="btn-pill pull-left" onClick={previousPage} style={{ marginLeft: '20px' }}>
                          <i className="fa fa-chevron-left" />
                          &nbsp; Previous
            </Button>
            <Button color="primary" className="btn-pill pull-right" type="submit" style={{marginRight: '20px'}}>
               Next &nbsp;
              <i className="fa fa-chevron-right" />
            </Button>
          </div>
        </Card>
      </Col>
    </form>
  );
};

EducationalDetailsForm.propTypes = {
    handleSubmit: PropTypes.func,
    previousPage: PropTypes.func
};

export default reduxForm({
  form: 'wizardForm',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
  validate
})(EducationalDetailsForm);
