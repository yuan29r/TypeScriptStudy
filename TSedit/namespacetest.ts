
namespace Test{
    interface Ivector{

    }
    export interface Ivector2d{

    }
    export interface Ivector3d{
        
    }
    export class Vector2D implements Ivector,Ivector2d{

    }
    export class Vector3D implements Ivector,Ivector3d{
        
    }
}

var vector2dinstance:Test.Ivector2d=new Test.Vector2D();
var vector3dinstance:Test.Ivector3d=new Test.Vector3D();