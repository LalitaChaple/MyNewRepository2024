public with sharing class WebAddsuserdata {
    
    @AuraEnabled(cacheable=true)

    public static List <User__c> UserList(Integer User Id )
      {
         return[

 select Email_Id__c ,User_Password__c from  User__c where Name = :User Id 

         ];

      }  
   
    }

    

