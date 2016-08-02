import {Component, OnInit} from '@angular/core';
import {DropmenuComponent} from 'gfui/index';
import {MenuComponent} from 'gfui/index';
import {GameService, OrderByPipe} from '../shared';
import {URLSearchParams} from '@angular/http';

@Component({
  moduleId: module.id,
  selector: 'app-games',
  templateUrl: 'games.component.html',
  styleUrls: ['games.component.css'],
  directives: [DropmenuComponent, MenuComponent],
  providers: [GameService],
  pipes: [OrderByPipe]
})
export class GamesComponent implements OnInit {

  games:any[];
  errorMessage:string;

  menu:any[] = [
    {
      title: {
        name: '类型',
        value: 'type'
      },
      items: [
        {
          name: '全部',
          value: undefined
        },
        {
          name: '射击',
          value: 'shooting'
        },
        {
          name: '动作',
          value: 'action'
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
      title: {name: '排序', value: 'order'},
      items: [
        {
          name: '时间长到短',
          value: 'time DESC, popularity DESC'
        },
        {
          name: '时间短到长',
          value: 'time ASC, popularity DESC'
        },
        {
          name: '价格高到低',
          value: 'price DESC, popularity DESC'
        },
        {
          name: '价格低到高',
          value: 'price ASC, popularity DESC'
        }]
    }
    // {
    //   title: {
    //     name: '适用人群',
    //     value: 'people'
    //   },
    //   items: [
    //     {
    //       name: '儿童(3~10岁)',
    //       value: 'children'
    //     },
    //     {
    //       name: '学生(10~18岁)',
    //       value: 'student'
    //     },
    //     {
    //       name: '成人(18~45岁)',
    //       value: 'adult'
    //     }]
    // }
  ];


  selectedValues:Object = {where: {}};
  params:URLSearchParams = new URLSearchParams();


  constructor(private gameService:GameService) {
  }

  ngOnInit() {
    this.selectedValues['order'] = 'popularity DESC';
    this.params.set('filter', JSON.stringify(this.selectedValues));
    this.getGame();
  }

  getGame() {
    return this.gameService.getGames(this.params).subscribe(games=>this.games = games, error => this.errorMessage = <any>error);
  }

  onSelectChange(e) {
    if (e.field !== 'order') {
      this.selectedValues['where'][e.field] = e.value;
    } else {
      this.selectedValues[e.field] = e.value;
    }
    this.params.set('filter', JSON.stringify(this.selectedValues));
    this.getGame();
  }
}
