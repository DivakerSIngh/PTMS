import { required ,prop} from "@rxweb/reactive-form-validators"
export class LoginUser {

  @required({message:'This field is required'})
  username:string;

  @required({message:'This field is required'})
  password:string;

  @prop()
  grant_type:string='password';
}