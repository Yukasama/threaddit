using SpaceService as service from '../cap-server/srv/space-service';

annotate service.Spaces with @(UI.LineItem: [
  {
    $Type: 'UI.DataField',
    Label: 'name',
    Value: name,
  },
  {
    $Type: 'UI.DataField',
    Label: 'count',
    Value: count,
  },
]);

annotate service.Spaces with @(
  UI.FieldGroup #GeneratedGroup1: {
    $Type: 'UI.FieldGroupType',
    Data : [
      {
        $Type: 'UI.DataField',
        Label: 'name',
        Value: name,
      },
      {
        $Type: 'UI.DataField',
        Label: 'count',
        Value: count,
      },
    ],
  },
  UI.Facets                     : [{
    $Type : 'UI.ReferenceFacet',
    ID    : 'GeneratedFacet1',
    Label : 'General Information',
    Target: '@UI.FieldGroup#GeneratedGroup1',
  }, ]
);
