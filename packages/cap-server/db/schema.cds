namespace db;

using {
  managed,
  cuid,
} from '@sap/cds/common';

entity Users : cuid, managed {
  name   : String;
  spaces : Composition of many Members
             on spaces.user = $self;
  posts  : Composition of many Posts
             on posts.author = $self;
}

entity Spaces : cuid, managed {
  name          : String;
  posts         : Composition of many Posts
                    on posts.space = $self;
  members       : Composition of many Members
                    on members.space = $self;
  virtual count : Integer;
}

entity Members : cuid, managed {
  key user  : Association to Users;
  key space : Association to Spaces;
}

entity Posts : cuid, managed {
  title  : String(100);
  text   : String(1000);
  parent : Association to Posts;
  space  : Association to Spaces;
  author : Association to Users;
}
