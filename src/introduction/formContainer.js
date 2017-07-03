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
			selectedTypeDonation: '',
			InfoDonation: [],
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
	componenDidMount(){
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

	}

	handleClearForm(e){
		e.preventDefault(e);
		this.setState({
			donorsName :'',
			selectedDonation :[],
			ownerTypeDonation :'',
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

		console.log('string split into array of letters',textArray);

		const filteredText = textArray.join('');
		this.setState({ description: filteredText });
		this.setState({ description: e.target.value }, () => console.log('description', this.state.description));
	}

	render(){
		return (
			<form className="container" onSubmit={this.handleFormSubmit}>
				<h5>Donation Form</h5>
				<SingleInput
					inputType={'text'}
					title={'Full name'}
					name={'name'}
					controlFunc={this.handleDonorsNameChange}
					content={this.state.donorsName}
					placeholder={'Type donors name here'} />
				<Select
					name={'typeDonation'}
					placeholder={'Choose your type  donation'}
					controlFunc={this.handleTypeDonationt}
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
					title={'Do you want received info for another donation?'}
					setName={'donation'}
					controlFunc={this.handleInfoDonation}
					type={'radio'}
					options={this.state.followInfoDonation}
					selectedOptions={this.state.selectedInfoDonation} />
				<SingleInput
					inputType={'number'}
					title={'How many times current donation?'}
					name={'currentDonation'}
					controlFunc={this.handleCurrentDonation}
					content={this.state.currentDonation}
					placeholder={'Enter number of current donation'} />
				<TextArea
					title={'Give us describtion about you'}
					rows={5}
					resize={false}
					content={this.state.description}
					name={'currentPetInfo'}
					controlFunc={this.handleDescriptionChange}
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
