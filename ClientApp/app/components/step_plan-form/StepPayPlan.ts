export class StepPayPlan { 

    constructor(
        //sectionI
        public teamworkRating = '', //these rating should be from 1-3
        public integrityRating = '',
        public innovationRating = '',
        public professionalismRating = '',
        //sectionII
        public rating = '', //rating 1-3 as well
        public responsibility = '',
        public summary = '',
        //sectionIII
        public completionDate = '',
        public goal = '',
        //sectionIV
        public raterComments = '',
        //sectionV
        public reviewerComments = '',
        public employeeComments = '',
        public supervisorSignature = '', //make this a checkbox or radio button
        public officerSignature = '',
        public date = '',
        public sap = ''
        //there's more items to account for in this section but i'm not sure how to handle them
    ) { }
}