
import { LightningElement } from  'lwc';
import { ShowToastEvent } from  'lightning/platformShowToastEvent';
import User_OBJECT from  '@salesforce/schema/User__c';
import FIRST_NAME from  '@salesforce/schema/User__c.First_Name__c';
import LAST_NAME from  '@salesforce/schema/User__c.Last_Name__c';
import EMAIL_FIELD from  '@salesforce/schema/User__c.Email_Id__c';
import { NavigationMixin } from  'lightning/navigation';
import { api } from 'lwc';


export default class WebAddLoginClick extends NavigationMixin(LightningElement) {
    Mytitle="Welcome to Login Page";
    objectApiName = User_OBJECT;
    fields = [FIRST_NAME, LAST_NAME, EMAIL_FIELD];
    handleSuccess(event) {
        const toastEvent = new ShowToastEvent({
        title: "User created",
        message: "Record ID: " + event.detail.id,
        variant: "success"
        });
        this.dispatchEvent(toastEvent);
        this.navigateToNewContactPage(event.detail.id);
    }
    navigateToNewContactPage(Name) {
            this[NavigationMixin.Navigate]({
            type: 'standard__recordPage',
                attributes: {
                recordId: Name,
                objectApiName: 'User__c',
                actionName: 'view'
                }
            });
        }
    }        
