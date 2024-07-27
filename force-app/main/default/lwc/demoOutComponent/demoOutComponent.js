import {LightningElement} from 'lwc';
import createLead from '@salesforce/apex/DemoOutController.createLead';
import leadObject from '@salesforce/schema/Lead';

export default class DemoOutComponent extends LightningElement {
    leadRecord = leadObject;
    isLeadCreated = false;

    handleLastNameChange(event) {
        this.leadRecord.LastName = event.target.value;
    }

    handleFirstNameChange(event) {
        this.leadRecord.FirstName = event.target.value;
    }

    handleEmailChange(event) {
        this.leadRecord.Email = event.target.value;
    }

    handlePhoneChange(event) {
        this.leadRecord.Phone = event.target.value;
    }

    handleCompanyChange(event) {
        this.leadRecord.Company = event.target.value;
    }


    handleApply() {
        let allValid = [...this.template.querySelectorAll('lightning-input')]
            .reduce((validSoFar, inputCmp) => {
            inputCmp.reportValidity();
            return validSoFar && inputCmp.checkValidity();
        }, true);
        if (allValid) {
            this.createRecord();
        }
    }

    createRecord() {
        createLead({leadRecord: this.leadRecord})
            .then((res) => {
                this.isLeadCreated = res.hasOwnProperty('Id');
            })
            .then((res) => {
                this.leadRecord = leadObject
            })
    }

}
