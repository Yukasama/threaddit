using {
    managed,
    cuid,
} from '@sap/cds/common';

entity Users : cuid, managed {
    name : String;
    spaces: Association to many Spaces;
    posts: Composition of many Posts;
}

entity Spaces : cuid, managed {
    name: String;
    posts: Composition of many Posts;
    virtual members: Integer;
}

entity Posts : cuid, managed {
    title: String(100);
    text: String(1000);
}