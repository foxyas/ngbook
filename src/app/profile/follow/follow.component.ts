import { Component, OnInit, Input } from '@angular/core'
import { FollowService } from './../../services/follow.service'

@Component({
  selector: 'app-follow',
  templateUrl: './follow.component.html',
  styleUrls: ['./follow.component.css']
})
export class FollowComponent implements OnInit {
  @Input() currentProfileId
  public isFollowing: boolean 
  private isLoading: boolean = true 
  constructor(
    private followService: FollowService
  ) { }

  ngOnInit() {
    this.followService.isFollowing(this.currentProfileId)
                      .then(response => {
                        this.isFollowing = response 
                        this.isLoading = false 
                      })
  }

  follow() {
    this.isLoading = true 
    this.followService.follow(this.currentProfileId)
                      .then(resp => {
                        console.log(resp)
                        this.isFollowing = true
                        this.isLoading = false 
                      })
  }

  unfollow() {
    this.isLoading = true 
    this.followService.unfollow(this.currentProfileId)
                      .then(resp => {
                        console.log(resp)
                        this.isLoading = false 
                        this.isFollowing = false 
                      })
  }

}