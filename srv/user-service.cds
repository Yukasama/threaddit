using {threaddit as db} from '../db/schema';

@path: 'service/users'
service UserService {
  entity Users as projection on db.Users;
}
