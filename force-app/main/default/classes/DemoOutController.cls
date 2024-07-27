public without sharing class DemoOutController {
	@AuraEnabled
	public static Lead createLead(Lead leadRecord) {
		insert leadRecord;
		return leadRecord;
    }
}
