using {threaddit as db} from '../db/schema';

@path: '/service/user-space'
service MemberService {
  entity Members as projection on db.Members
}
