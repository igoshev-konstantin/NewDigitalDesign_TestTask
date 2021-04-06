-- DDL
create table if not exists public."pg_point"
(
    id          bigint   not null
        primary key
        generated ALWAYS AS IDENTITY,
    name        text     not null,
    point_number smallint not null,
    coordX      double precision,
    coordY      double precision
);

create table if not exists public."pg_point_property"
(
    id              bigint not null
        primary key
        generated ALWAYS AS IDENTITY,
    point_id        bigint not null
        references public."pg_point" (id),
    name            text   not null,
    propertiesTypes text   not null,
    value           smallint
);