sap.ui.define(
    [
        "sap/ui/core/mvc/Controller"
    ],
    function(BaseController) {
      "use strict";
 
      return BaseController.extend("Loans.workflowuimodule.controller.App", {
        onInit() {
    var oData = {
        comments: [
            {
                user: "latha.kumar@abcfinance.com",
                date: "21/01/2026, 11:04:50",
                message: "Loan request aligns with bank norms; approved."
            },
            {
                user: "divya.gupta@abcfinance.com",
                date: "07/01/2026, 16:04:42",
                message: "Repayment capacity not satisfactory; request rejected."
            },
            {
                user: "priya.reddy@abcfinance.com",
                date: "07/01/2026, 16:04:42",
                message: " Income and credit history acceptable; approved."
            }
        ]
    };
 
    var oModel = new sap.ui.model.json.JSONModel(oData);
    this.getView().setModel(oModel, "context");
 
    console.log(this.getView().getModel("context").getData()); // ← check console
}
,
onOpenCommentsDialog: function () {
 
    var oTimeline = this.byId("commentsTimeline");
    oTimeline.destroyContent(); // clear previous
 
    var aComments = this.getView().getModel("context").getProperty("/comments");
 
    aComments.forEach(function (oComment) {
        oTimeline.addContent(new sap.suite.ui.commons.TimelineItem({
            userName: oComment.user,
            dateTime: oComment.date,
            text: oComment.message,
            userPicture: "sap-icon://person-placeholder"
        }));
    });
 
    this.byId("commentsDialog").open();
}
,
 
onCloseCommentsDialog: function () {
    this.byId("commentsDialog").close();
}
 
      });
    }
  );
 