/**
 * 
 * By Ghayyas Mubashir 
 * Date sat Aug 20 2016
 * 
 */



import {Component} from '@angular/core';
import {NavController,ToastController} from 'ionic-angular';
import {NativeStorage} from 'ionic-native'

@Component({
  templateUrl: 'build/pages/home/home.html'
})


/**
 * 
 * Home Class
 * 
 */

export class HomePage {
  
 private native = {
    key: '',
    value: ''
  }
  private selected: any;
  private gettingItem:any;
  
  constructor(private navCtrl: NavController, private toast: ToastController) {
    
    //Native Storage will not work on browser but it works in Devices..
    this.selected = '';
  }
  
  
  /**
   * 
   * Toast Message
   *
   */
  
  showToast(msg){
  let toast =  this.toast.create({
      message: msg,
      duration: 3000,
      position:'buttom'
      
    })
    toast.present();
  }
  
  /**
   * 
   * Saved function
   * 
   */
  
  saved(native){
    NativeStorage.setItem(this.native.key,this.native.value).then((d)=>{
      console.log('storage save',d);
      this.showToast('successfuly saved to native Storage !');

    },(e)=>{
      console.log('unable to save',e);
      this.showToast('unable to saved to native storage');
    })
  }
  
  
  /**
   * 
   * Getting values from native storage
   * 
   */
  
    getLocal(){
     NativeStorage.getItem(this.native.key).then((d)=>{
      console.log('getting native storage data',d);
      this.gettingItem = d;
      
    },(e)=>{
      console.log('getting err',e);
      this.showToast('unable to get local from native storage')
    })
    }
    
    /**
     * 
     * Remove Selected Storage
     * 
     */
    
    removeSelected(s){
       NativeStorage.remove(s).then((d)=>{
      console.log('Successfully remove from native storage',d);
      this.showToast('successfuly remove selected');
    },(e)=>{
      console.log('error while remove data from native storage',e);
      this.showToast('Unable to remove selected storage')
    });
    }
    
    /**
     * 
     * Clear all data from native storage
     * 
     */
    
    
  removeAll(){
    NativeStorage.clear().then((d)=>{
      console.log('successfuly remove from native stoge all',d);
      this.showToast('Successfully remove all native storage');
    },(e)=>{
      console.log('error while removing from clear',e);
      this.showToast('error while removing all object');
    })    
  }
}
