import React, { Component } from 'react';
import SingleInput from '../component/singleinput';
import Select from '../component/select'
import CheckboxOrRadioGrup from '../component/checkboxorradiobutton';
import TextArea from '../component/textarea';
import '../App.css';

class Form extends Component {
	constructor(props){
		super(props);
		this.state = {
			donorsName: '',
			donationSelection: [],
			selectedDonation: [],
			typeDonation: [],
			followInfoDonation: [],
			selectedTypeDonation: '',
			InfoDonatioNn: [],
			selectedInfoDonation: [],
			currentDonation: 0,
			description: ''
		};
		this.handleFormSubmit         = this.handleFormSubmit.bind(this);
		this.handleClearForm          = this.handleClearForm.bind(this);
		this.handleDonorsName         = this.handleDonorsName.bind(this);
		this.handleTypeDonation       = this.handleTypeDonation.bind(this);
		this.handleDonationSelection  = this.handleDonationSelection.bind(this);
		this.handleInfoDonation       = this.handleInfoDonation.bind(this);
		this.handleCurrentDonation    = this.handleCurrentDonation.bind(this);
		this.handleDescription        = this.handleDescription.bind(this);
	}

	componentDidMount() {
		fetch('./fake_db.json')
			.then(res => res.json())
			.then( data => {
				this.setState({
					donorsName : data.donorsName, //name
					donationSelection : data.donationSelection, //checkbox donation
					selectedDonation : data.selectedDonation, //selected checbox
					typeDonation :data.typeDonation, //option type donation
					ownerTypeDonation : data.ownerTypeDonation, //selected option type donation
					followInfoDonation : data.followInfoDonation, //radiobutton
					selectedInfoDonation : data.selectedInfoDonation, //selected rb
					curretDonation : data.curretDonation, //input number
					description : data.description //desc
				});
			});

		console.log('loaded');
	}

	handleFormSubmit(e){
		e.preventDefault(e);
		const formPayload = {
			donorsName: this.state.donorsName,
			selectedDonation: this.state.selectedDonation,
			ownerTypeDonation: this.state.ownerTypeDonation,
			selectedInfoDonation: this.state.selectedInfoDonation,
			currentDonation: this.state.currentDonation,
			description: this.state.description
		};

		console.log(formPayload);
	}

	handleClearForm(e){
		e.preventDefault(e);
		this.setState({
			donorsName :'',
			selectedDonation :[],
			ownerTypeDonation :[],
			selectedInfoDonation :[],
			currentDonation :0,
			description:'',
		});

	}

	handleDonorsName(e){
		this.setState({
			donorsName: e.target.value
		});
	}

	handleTypeDonation(e){
		this.setState({
			typeDonation: e.target.value
		});
	}

	handleDonationSelection(e){
		const newSelection = e.target.value;
		let newSelectionArray;
			if(this.state.selectedDonation.indexOf(newSelection) > -1) {
				newSelectionArray = this.state.selectedDonation.filter(s => s !== newSelection)
			} else {
				newSelectionArray = [...this.state.selectedDonation, newSelection];
			}
			this.setState({ selectedDonation: newSelectionArray }, () => console.log('Donation selection', this.state.selectedDonation));
	}

	handleInfoDonation(e){
		this.setState({ selectedInfoDonation: [e.target.value] }, () => console.log('selectedInfoDonation', this.state.selectedInfoDonation));
	}

	handleCurrentDonation(e){
		this.setState({ currentDonation: e.target.value }, () => console.log('Donation count', this.state.currentDonation));
	}

	handleDescription(e){
		const textArray = e.target.value.split('').filter(x => x !== 'e');
		const filteredText = textArray.join('');
		this.setState({ description: filteredText });
		this.setState({ description: e.target.value }, () => console.log('description', this.state.description));
	}

	render(){
		return (
			<form className="donation_form" onSubmit={this.handleFormSubmit}>
				<h3>Donation Form</h3>
				<SingleInput
					inputType={'text'}
					title={'What is Your Name?'}
					name={'name'}
					controlFunc={this.handleDonorsName}
					content={this.state.donorsName}
					placeholder={'Type donors name here'} />
				<p>Choose your type donation here :</p>
				<Select
					title={'Choose your type donation'}
					name={'typeDonation'}
					placeholder={'Type  Donation'}
					controlFunc={this.handleTypeDonation}
					options={this.state.typeDonation}
					selectedOption={this.state.ownerTypeDonation} />
				<CheckboxOrRadioGrup
					title={'Which donation would you like give?'}
					setName={'donationSelection'}
					type={'checkbox'}
					controlFunc={this.handleDonationSelection}
					options={this.state.donationSelection}
					selectedOptions={this.state.selectedDonation} />
				<CheckboxOrRadioGrup
					title={'Follow new information about this donation? '}
					setName={'donation'}
					controlFunc={this.handleInfoDonation}
					type={'radio'}
					options={this.state.followInfoDonation}
					selectedOptions={this.state.selectedInfoDonation} />
				<SingleInput
					inputType={'number'}
					title={'Your current donation?'}
					name={'currentDonation'}
					controlFunc={this.handleCurrentDonation}
					content={this.state.currentDonation}
					placeholder={'Enter number of current donation'} />
				<TextArea
					title={'Give us your Critic and Suggestion here :'}
					rows={5}
					resize={false}
					content={this.state.description}
					name={'currentPetInfo'}
					controlFunc={this.handleDescription}
					placeholder={'Please be thorough in your descriptions'} />
				<input
					type="submit"
					className="btn btn-primary float-right"
					value="Submit"/>
				<button
					className="btn btn-link float-left"
					onClick={this.handleClearForm}>Clear form</button>
			</form>
		);
	}
}

export default Form;
