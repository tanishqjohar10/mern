import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import validate from '../validation/validation';
import FormInput from '../components/FormInput';
import {
    captialize,
    age,
    salary,
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

const SocialAndHobbiesDetailsForm = (props) => {
    const { handleSubmit, pristine, previousPage, submitting } = props;
    return (
        <form onSubmit={handleSubmit}>
            <Col xs="12" sm="12">
                <Card className="card-border">
                    <CardBody>
                        <Field
                            name="LinkedinProfile"
                            type="text"
                            component={FormInput}
                            label="Linkedin "
                            inputPlaceHolder="Linkedin Profile"
                        />
                        <Field
                            name="Github"
                            type="text"
                            component={FormInput}
                            label="Github Profile"
                            inputPlaceHolder="Github Profile"
                        />
                        <Field
                            name="Facebook"
                            type="text"
                            component={FormInput}
                            label="Facebook Profile"
                            inputPlaceHolder="Facebook Profile"
                        />
                        <Field
                            name="Hobbies"
                            type="text"
                            component={FormInput}
                            label="Hobbies"
                            inputPlaceHolder="Hobbies"
                        />
                       
                        <br />


                    </CardBody>
                    <div style={{ paddingBottom: 30 }}>
                        <Button color="primary" className="btn-pill pull-left" onClick={previousPage} style={{ marginLeft: '20px' }}>
                            <i className="fa fa-chevron-left" />
                            &nbsp; Previous
            </Button>
                        <Button color="primary" className="btn-pill pull-right" type="submit" style={{ marginRight: '20px' }} disabled={pristine || submitting}>
                            Save &nbsp;
              <i className="fa fa-check" />
                        </Button>
                    </div>
                </Card>
            </Col>
        </form>
    );
};

SocialAndHobbiesDetailsForm.propTypes = {
    handleSubmit: PropTypes.func,
    pristine: PropTypes.bool,
    previousPage: PropTypes.func,
    submitting: PropTypes.bool
};

export default reduxForm({
    form: 'wizardForm',
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true,
    validate
})(SocialAndHobbiesDetailsForm);
