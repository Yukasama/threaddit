using {threaddit as db} from '../db/schema';

@path: 'service/spaces'
service SpaceService {
  entity Spaces  as projection on db.Spaces;
  annotate Spaces with @odata.draft.enabled;
  entity Posts   as projection on db.Posts;
  entity Members as projection on db.Members;
}
