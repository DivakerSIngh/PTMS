import { required ,maxLength,prop} from "@rxweb/reactive-form-validators"
export class LoginUser {

  @required({message:'This field is required'})
  // @maxLength({value:10,message:'asdasd'})
  username:string;

  @required({message:'This field is required'})
  password:string;

  @prop()
  grant_type:string='password';
}