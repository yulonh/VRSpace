import {Component, OnInit} from '@angular/core';
import {DropmenuComponent} from 'gfui/index';
import {MenuComponent} from 'gfui/index';
import {GameService} from '../shared';

@Component({
  moduleId: module.id,
  selector: 'app-games',
  templateUrl: 'games.component.html',
  styleUrls: ['games.component.css'],
  directives: [DropmenuComponent, MenuComponent],
  providers: [GameService]
})
export class GamesComponent implements OnInit {

  games:any[];
  errorMessage: string;

  menu:any[] = [
    {
      title: {
        name: '类型',
        value: 'type'
      },
      items: [
        {
          name: '动作',
          value: 'action'
        },
        {
          name: '射击',
          value: 'shooting'
        },
        {
          name: '竞速',
          value: 'race'
        },
        {
          name: '冒险',
          value: 'risk'
        },
        {
          name: '休闲',
          value: 'arder'
        },
        {
          name: '模拟',
          value: 'simulate'
        }
      ]
    },
    {
      title: {name: '排序', value: 'sort'},
      items: [
        {
          name: '时间从长到短',
          value: 'timeDesc'
        },
        {
          name: '时间短到长',
          value: 'timeAsc'
        },
        {
          name: '价格高到低',
          value: 'priceDesc'
        },
        {
          name: '价格低到高',
          value: 'priceAsc'
        }]
    },
    {
      title: {
        name: '适用人群',
        value: 'people'
      },
      items: [
        {
          name: '儿童(3~10岁)',
          value: 'children'
        },
        {
          name: '学生(10~18岁)',
          value: 'student'
        },
        {
          name: '成人(18~45岁)',
          value: 'adult'
        }]
    }
  ];

  selectedValues:Object = {};


  constructor(private gameService:GameService) {
  }

  ngOnInit() {
    this.getGame();
  }

  getGame() {
    return this.gameService.getGames().subscribe(games=>this.games = games, error => this.errorMessage = <any>error);
  }

  onSelectChange(e) {
    this.selectedValues[e.field] = e.value;
    console.log(this.selectedValues);
    this.getGame();
  }
}
