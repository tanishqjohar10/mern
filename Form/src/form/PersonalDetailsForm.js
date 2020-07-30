import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import validate from '../validation/validation';
import FormInput from '../components/FormInput';
import {
  upper,
  aadhaar,
  pan,
  salary
} from '../validation/normalize';
import {
  Button,
  Card,
  CardBody,
  Col,
  FormGroup,
  Input,
  Label
} from 'reactstrap';

const PersonalDetailsForm = (props) => {
  const { handleSubmit, previousPage } = props;
  return (
    <form onSubmit={handleSubmit}>
      <Col sm="12">
        <Card className="card-border">
          <CardBody>
            <Field
              name="Firstname"
              type="text"
              component={FormInput}
              label="Firstname "
              inputPlaceHolder="Firstname"
                      />
           <Field
              name="Lastname"
              type="text"
              component={FormInput}
              label="Lastname "
              inputPlaceHolder="Lastname"
           />
              <FormGroup row>
              <Col xs="12" lg="6">
                 <Field
                  name="Email"
                  type="text"
                  component={FormInput}
                  label="Email"
                  inputPlaceHolder="Enter Email"
                    />
              </Col>
              <Col xs="12" lg="6">
                <Field
                  name="Phonenumber"
                  type="text"
                  component={FormInput}
                  label="Phone number"
                  inputPlaceHolder="Enter Phone number"
                />
              </Col>
              <Col xs="12" lg="6">
                <Field
                  name="Currentaddress"
                  type="text"
                  component={FormInput}
                  label="Current address"
                  inputPlaceHolder="Enter Current address"
                />
                </Col>
               <Col xs="12" lg="6">
                  <Field
                  name="Permanentaddress"
                  type="text"
                  component={FormInput}
                  label="Permanent address"
                  inputPlaceHolder="Enter Permanent address"
                  />
                 </Col>
            </FormGroup>
            
           
            <FormGroup row>
              
              <Col xs="12" lg="6">
                <FormGroup row>
                  <Col xs="12" lg="6">
                    <Label htmlFor="file-input">
                      Upload Employee photo
                    </Label>
                  </Col>
                  <Col xs="12" md="9">
                    <Input
                      type="file"
                      id="file-input"
                      name="image"
                      accept="image/*"
                    />
                  </Col>
                </FormGroup>
              </Col>
            </FormGroup>
          </CardBody>
          <div style={{ paddingBottom: 30 }}>
            
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

PersonalDetailsForm.propTypes = {
  handleSubmit: PropTypes.func,
  previousPage: PropTypes.func
};

export default reduxForm({
  form: 'wizardForm',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
  validate,
})(PersonalDetailsForm);
