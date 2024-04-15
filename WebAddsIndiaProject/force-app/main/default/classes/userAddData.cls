public class userAddData {
   Send_Add__c  adds;
    
    public Send_Add__c  getAdds()
    {
        if(adds==null)
        
            adds=[select Add_Name__c, Add_AssignedDate__c,AddId__c from Send_Add__c  
                     where id =:ApexPages.currentPage().getParameters().get('id')]; 
      
    return adds;
    }
}