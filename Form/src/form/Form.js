import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Stepper from 'react-stepper-horizontal';
import { Card } from 'reactstrap';
import PersonalDetailsForm from './PersonalDetailsForm';
import EducationalDetailsForm from './EducationalDetailsForm';
import SocialAndHobbiesDetailsForm from './SocialAndHobbiesDetailsForm';
import ProfessionalExperienceDetailsForm from './ProfessionalExperienceDetailsForm';

class Form extends Component {

  constructor(props) {
    super(props);
    this.nextPage = this.nextPage.bind(this);
    this.previousPage = this.previousPage.bind(this);
    this.state = {
      page: 0,
      steps: [
        {title: 'Personal Details'},
        {title: 'Educational Details'},
          { title: 'ProfessionalExperience Details' },
          { title: 'SocialAndHobbies Details' }

      ]
    };
  }

  nextPage() {
    this.setState({ page: this.state.page + 1 });
  }

  previousPage() {
    this.setState({ page: this.state.page - 1 });
  }

  render() {
    const { onSubmit } = this.props;
    const { page, steps } = this.state;

    return (
      <Card>
        <Stepper steps={ steps } activeStep={ page } />
        {page === 0 && <PersonalDetailsForm onSubmit={this.nextPage} />}
        {page === 1 && (
          <EducationalDetailsForm
            previousPage={this.previousPage}
            onSubmit={this.nextPage}
          />
            )}

            {page === 2 && (
                <ProfessionalExperienceDetailsForm
                    previousPage={this.previousPage}
                    onSubmit={this.nextPage}
                />
            )}


        {page === 3 && (
          <SocialAndHobbiesDetailsForm
            previousPage={this.previousPage}
            onSubmit={onSubmit}
          />
        )}
      </Card>
    );
  }

}

Form.propTypes = {
  onSubmit: PropTypes.func
};

export default Form;
