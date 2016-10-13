
export class AppComponent {

  static componentName: string = 'tbRoot';

  static componentConfig: ng.IComponentOptions = {
    bindings: {},
    controller: AppComponent,
    template: require('./app.component.html')    
  };

  views: Object[] = [
    {
      name: 'My Account',
      description: 'Edit my account information',
      icon: 'assignment ind'
    }
  ];

  // Define our injectables
  private $mdSidenav: angular.material.ISidenavService;

  constructor(
    $mdSidenav: angular.material.ISidenavService) { 
  
    // Store our injectables
    this.$mdSidenav = $mdSidenav;
      
  }

  toggleMenu() {
    this.$mdSidenav('left').toggle();
  }

}