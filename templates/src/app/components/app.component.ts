import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {

  content: object = [
    {
      title: "Education",
      class: "education",
      contacts: false,
      subsections: [
        {
          id: 'univ1',
          title: 'University Name',
          date: '2014-2017',
          subtitle: 'Master of Science',
          description: 'Lorem ipsum dolor sit amet, ' +
          'consectetur adipiscing elit. Aliquam sit ' +
          'amet nunc risus. Cras augue tellus, porta id nibh eu '
        },
        {
          id: 'univ2',
          title: 'University Name',
          date: '2014-2017',
          subtitle: 'Master of Science',
          description: 'Lorem ipsum dolor sit amet, ' +
          'consectetur adipiscing elit. Aliquam sit ' +
          'amet nunc risus. Cras augue tellus, porta id nibh eu '
        },
      ]
    }, //end section
    {
      title: "Experience",
      class: "experience",
      contacts: false,
      subsections: [
        {
          id: 'company1',
          title: 'Company Name',
          date: '2014-2017',
          subtitle: 'Position Title',
          description: 'Lorem ipsum dolor sit amet, ' +
          'consectetur adipiscing elit. Aliquam sit ' +
          'amet nunc risus. Cras augue tellus, porta id nibh eu '
        },
        {
          id: 'company2',
          title: 'Company Name',
          date: '2014-2017',
          subtitle: 'Position Title',
          description: 'Lorem ipsum dolor sit amet, ' +
          'consectetur adipiscing elit. Aliquam sit ' +
          'amet nunc risus. Cras augue tellus, porta id nibh eu '
        },
        {
          id: 'company3',
          title: 'Company Name',
          date: '2014-2017',
          subtitle: 'Position Title',
          description: 'Lorem ipsum dolor sit amet, ' +
          'consectetur adipiscing elit. Aliquam sit ' +
          'amet nunc risus. Cras augue tellus, porta id nibh eu '
        },
        {
          id: 'company4',
          title: 'Company Name',
          date: '2014-2017',
          subtitle: 'Position Title',
          description: 'Lorem ipsum dolor sit amet, ' +
          'consectetur adipiscing elit. Aliquam sit ' +
          'amet nunc risus. Cras augue tellus, porta id nibh eu '
        }
      ]
    }, //end section
    {
      title: "References",
      class: "references",
      contacts: false,
      subsections: [
        {
          id: 'ref1',
          title: 'Reference name',
          date: null,
          subtitle: null,
          description: 'Lorem ipsum dolor sit amet, ' +
          'consectetur adipiscing elit. Aliquam sit ' +
          'amet nunc risus. Cras augue tellus, porta id nibh eu '
        },
        {
          id: 'ref2',
          title: 'Reference name',
          date: null,
          subtitle: null,
          description: 'Lorem ipsum dolor sit amet, ' +
          'consectetur adipiscing elit. Aliquam sit ' +
          'amet nunc risus. Cras augue tellus, porta id nibh eu '
        },
      ]
    }, //end section
    //contact item
    {
      title: "Contact",
      class: "contacts",
      contacts: true,
      subsections: [
        {
          id: 'contacts1',
          contacts: [
            {
              contact: '+000123456789012',
              icon: 'fa fa-phone',
              link: '#'
            },
            {
              contact: '323 Jones St. New York, NY',
              icon: 'fa fa-map-marker',
              link: '#'
            },
            {
              contact: 'www.yourcompany.com',
              icon: 'fa fa-globe',
              link: '#'
            }
          ]
        }
        ,
        {
          id: 'contacts1',
          contacts: [
            {
              contact: 'John_Doe@email.com',
              icon: 'fa fa-envelope',
              link: '#'
            },
            {
              contact: '@yourusername',
              icon: 'fa fa-twitter',
              link: '#'
            },
            {
              contact: '@yourusername',
              icon: 'fa fa-facebook-official',
              link: '#'
            }
          ]
        }
      ]
    } //end section
  ]

  prettyObject = JSON.stringify(this.content);

} //end AppComponent 
