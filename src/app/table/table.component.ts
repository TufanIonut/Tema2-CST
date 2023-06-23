import { Component } from '@angular/core';
import { NzTableFilterFn, NzTableFilterList, NzTableSortFn, NzTableSortOrder } from 'ng-zorro-antd/table';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})

export class TableComponent {
  
  listOfColumn: ColumnItem[] = [
    {
      name: 'Name',
      sortOrder: null,
      sortFn: (a: Person, b: Person) => a.name.localeCompare(b.name),
      listOfFilter: [
        { text: 'John', value: 'John' },
        { text: 'Natalie', value: 'Natalie' },
      ],
      filterFn: (list: string[], item: Person) => list.some(name => item.name.indexOf(name) !== -1)
    },
    {
      name: 'Age',
      sortOrder: null,
      sortFn: (a: Person, b: Person) => a.age - b.age,
      listOfFilter: [],
      filterFn: null
    },
    {
      name: 'Address',
      sortOrder: null,
      sortFn: (a: Person, b: Person) => a.address.localeCompare(b.address),
      listOfFilter: [
        { text: 'London', value: 'London' },
        { text: 'Sidney', value: 'Sidney' }
      ],
      filterFn: (address: string, item: Person) => item.address.indexOf(address) !== -1
    },
    {
      name: 'Courses',
      sortOrder: null,
      sortFn: (a: Person, b: Person) => a.courses.localeCompare(b.courses),
      listOfFilter: [
        { text: 'Vinyasa', value: 'Vinyasa' },
        { text: 'Ashtanga', value: 'Ashtanga' },
        { text: 'Yin Yoga', value: 'Yin Yoga' },
      ],
      filterFn: (list: string[], item: Person) => list.some(name => item.courses.indexOf(name) !== -1)
    }
  ];

  listOfData: Person[] = [
    {
      key: '1',
      name: 'John Smith',
      age: 27,
      address: 'New York No. 1 Times Square',
      courses: 'Vinyasa'
    },
    {
      key: '2',
      name: 'Khloe Adam',
      age: 42,
      address: 'London No. 1 Lake Park',
      courses: 'Ashtanga'
    },
    {
      key: '3',
      name: 'Natalie Portman',
      age: 30,
      address: 'Sidney No. 1 Central Park',
      courses: 'Yin Yoga'
    },
    {
      key: '4',
      name: 'John Brown',
      age: 42,
      address: 'London No. 5 Central Park',
      courses: 'Yin Yoga'
    },
    {
      key: '5',
      name: 'Khloe Stones',
      age: 27,
      address: 'Sidney No. 3 Fairfield',
      courses: 'Ashtanga'
    }
  ];

  trackByName(_: number, item: ColumnItem): string {
    return item.name;
  }
}

interface Person {
  key: string;
  name: string;
  age: number;
  address: string;
  courses: string;
}

interface ColumnItem {
  name: string;
  sortOrder: NzTableSortOrder | null;
  sortFn: NzTableSortFn<Person> | null;
  listOfFilter: NzTableFilterList;
  filterFn: NzTableFilterFn<Person> | null;
}