import { Component, OnInit } from '@angular/core';
import { DataService} from "src/app/data.service";
import { Category } from "src/app/logic/Category";

@Component({
  selector: 'app-list-category',
  templateUrl: './list-category.component.html',
  styles: []
})
export class ListCategoryComponent implements OnInit {
  list: [Category];
  icons: [
    {group: 'forest',    name:'tree'        },
    {group: 'monument',  name:'monument-2'  },
    {group: 'monument',  name:'castle'      },
    {group: 'monument',  name:'monument-10' },
    {group: 'transport', name:'vagon'       },
    {group: 'monument',  name:'monument-5'  },
    {group: 'monument',  name:'monument-7'  },
    {group: 'beach',     name:'house'       },
    {group: 'monument',  name:'pyrimad'     },
    {group: 'monument',  name:'monument-7'  },
    {group: 'monument',  name:'monument'    },
    {group: 'monument',  name:'pyramids'    },
    {group: 'forest',    name:'tent'        },
    {group: 'blank',     name:'blank'       },
    {group: 'beach',     name:'sailing'     },
    {group: 'monument',  name:'house'       },
    {group: 'blank',     name:'blank'       },
    {group: 'hotel',     name:'single-bed'  },
    {group: 'blank',     name:'blank'       },
    {group: 'forest',    name:'trailer'     }
  ];

  constructor(private data: DataService
    ) { }

  ngOnInit() {
    this.icons =  [
      {group: 'forest',    name:'tree'        },
      {group: 'monument',  name:'monument-2'  },
      {group: 'monument',  name:'castle'      },
      {group: 'monument',  name:'monument-10' },
      {group: 'transport', name:'vagon'       },
      {group: 'monument',  name:'monument-5'  },
      {group: 'monument',  name:'monument-7'  },
      {group: 'beach',     name:'house'       },
      {group: 'monument',  name:'pyrimad'     },
      {group: 'monument',  name:'monument-7'  },
      {group: 'monument',  name:'monument'    },
      {group: 'monument',  name:'pyramids'    },
      {group: 'forest',    name:'tent'        },
      {group: 'blank',     name:'blank'       },
      {group: 'beach',     name:'sailing'     },
      {group: 'monument',  name:'house'       },
      {group: 'blank',     name:'blank'       },
      {group: 'hotel',     name:'single-bed'  },
      {group: 'blank',     name:'blank'       },
      {group: 'forest',    name:'trailer'     }
    ];
    this.data.getList("categorie", list => {
      this.list = list;
    })
    console.log(this.icons);
  }

}
