begin;

drop table IF EXISTS lookingplayers_participants CASCADE ;

drop table IF EXISTS lookingplayers CASCADE ;

drop table IF EXISTS material_compound CASCADE ;

drop table IF EXISTS schedule CASCADE ;

drop table IF EXISTS review CASCADE ;

drop table IF EXISTS post_comment CASCADE ;

drop table IF EXISTS post CASCADE ;

drop table IF EXISTS event_participant CASCADE ;

drop table IF EXISTS event CASCADE ;

drop table IF EXISTS user_sports CASCADE ;

drop table IF EXISTS sports CASCADE ;

drop table IF EXISTS group_message CASCADE ;

drop table IF EXISTS group_participant CASCADE ;

drop table IF EXISTS user_group CASCADE ;

drop table IF EXISTS private_message CASCADE ;

drop table IF EXISTS friends CASCADE ;

drop table IF EXISTS field CASCADE ;

drop table IF EXISTS materials CASCADE ;

drop table IF EXISTS compound CASCADE ;

drop table IF EXISTS user_profile CASCADE ;

commit;