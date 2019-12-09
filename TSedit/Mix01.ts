module Geometry{
    export interface IVector{
        toArray(callback:(x:number[])=>void):void;
        length():number;
        normalize();
    }

    export class Vector implements IVector{
        private _x:number;
        private _y:number;
        private readonly newProperty = 1 / this.length();

        constructor(x:number,y:number){
            this._x=x;
            this._y=y;
        }
        toArray(callback:(x:number[])=>void):void{
            callback([this._x,this._y]);
        }
        length():number{
            return Math.sqrt(this._x*this._x+this._y*this._y);
        }
        normalize(){
            var len=this.newProperty;
            this._x*=len;
            this._y*=len;
        }
    }         
}

var vector:Geometry.IVector=new Geometry.Vector(2,3);
vector.normalize();
vector.toArray(function(vectorAsArray:number[]){
    console.log('x:'+vectorAsArray[0]+'y:'+vectorAsArray[1]);
});