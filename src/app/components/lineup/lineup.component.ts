export class LineupComponent {
  static componentName: string = "tbLineup";

  static componentConfig: ng.IComponentOptions = {
    bindings: {},
    controller: LineupComponent,
    template: require('./lineup.component.html'),
  };

  public lineup: any[] = [
    {
      id: 1,
      numberOfPeople: 2,
      partyName: 'smith'
    },
    {
      id: 2,
      numberOfPeople: 2,
      partyName: 'jones'
    }
  ];

}