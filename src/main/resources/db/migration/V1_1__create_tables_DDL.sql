-- DDL
create table if not exists public."Point"
(
    id          bigint   not null
        primary key
        generated ALWAYS AS IDENTITY,
    name        text     not null,
    pointNumber smallint not null,
    coordX      double precision,
    coordY      double precision
);

create table if not exists public."PointProperty"
(
    id              bigint not null
        primary key
        generated ALWAYS AS IDENTITY,
    point_id        bigint not null
        references public."Point" (id),
    name            text   not null,
    propertiesTypes text   not null,
    value           smallint
);