sap.ui.require(
  [
    "sap/fe/test/JourneyRunner",
    "dashboard/test/integration/FirstJourney",
    "dashboard/test/integration/pages/SpaceList",
    "dashboard/test/integration/pages/SpaceObjectPage",
  ],
  function (JourneyRunner, opaJourney, SpaceList, SpaceObjectPage) {
    "use strict";
    var JourneyRunner = new JourneyRunner({
      // start index.html in web folder
      launchUrl: sap.ui.require.toUrl("dashboard") + "/index.html",
    });

    JourneyRunner.run(
      {
        pages: {
          onTheSpaceList: SpaceList,
          onTheSpaceObjectPage: SpaceObjectPage,
        },
      },
      opaJourney.run
    );
  }
);
