--
-- PostgreSQL database dump
--

-- Dumped from database version 13.2
-- Dumped by pg_dump version 13.2

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: Favorite; Type: TABLE; Schema: public; Owner: dune
--

CREATE TABLE public."Favorite" (
    id integer NOT NULL,
    "userId" integer,
    placeid character varying(255),
    place character varying(255),
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public."Favorite" OWNER TO dune;

--
-- Name: Favorite_id_seq; Type: SEQUENCE; Schema: public; Owner: dune
--

CREATE SEQUENCE public."Favorite_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Favorite_id_seq" OWNER TO dune;

--
-- Name: Favorite_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: dune
--

ALTER SEQUENCE public."Favorite_id_seq" OWNED BY public."Favorite".id;


--
-- Name: Favorites; Type: TABLE; Schema: public; Owner: dune
--

CREATE TABLE public."Favorites" (
    id integer NOT NULL,
    "placeId" character varying(255),
    place character varying(255),
    "userId" integer,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public."Favorites" OWNER TO dune;

--
-- Name: Favorites_id_seq; Type: SEQUENCE; Schema: public; Owner: dune
--

CREATE SEQUENCE public."Favorites_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Favorites_id_seq" OWNER TO dune;

--
-- Name: Favorites_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: dune
--

ALTER SEQUENCE public."Favorites_id_seq" OWNED BY public."Favorites".id;


--
-- Name: MyTrips; Type: TABLE; Schema: public; Owner: dune
--

CREATE TABLE public."MyTrips" (
    id integer NOT NULL,
    "placeId" character varying(255),
    place character varying(255),
    "userId" integer,
    reservations character varying(255),
    "travelDates" character varying(255),
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    "placeURL" character varying(255),
    photo character varying(255)
);


ALTER TABLE public."MyTrips" OWNER TO dune;

--
-- Name: MyTrips_id_seq; Type: SEQUENCE; Schema: public; Owner: dune
--

CREATE SEQUENCE public."MyTrips_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."MyTrips_id_seq" OWNER TO dune;

--
-- Name: MyTrips_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: dune
--

ALTER SEQUENCE public."MyTrips_id_seq" OWNED BY public."MyTrips".id;


--
-- Name: Photos; Type: TABLE; Schema: public; Owner: dune
--

CREATE TABLE public."Photos" (
    id integer NOT NULL,
    title character varying(255),
    url character varying(255),
    "userId" integer,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public."Photos" OWNER TO dune;

--
-- Name: Photos_id_seq; Type: SEQUENCE; Schema: public; Owner: dune
--

CREATE SEQUENCE public."Photos_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Photos_id_seq" OWNER TO dune;

--
-- Name: Photos_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: dune
--

ALTER SEQUENCE public."Photos_id_seq" OWNED BY public."Photos".id;


--
-- Name: SequelizeMeta; Type: TABLE; Schema: public; Owner: dune
--

CREATE TABLE public."SequelizeMeta" (
    name character varying(255) NOT NULL
);


ALTER TABLE public."SequelizeMeta" OWNER TO dune;

--
-- Name: Users; Type: TABLE; Schema: public; Owner: dune
--

CREATE TABLE public."Users" (
    id integer NOT NULL,
    "firstName" character varying(255),
    "lastName" character varying(255),
    email character varying(255),
    "myTripId" integer,
    "travelDates" character varying(255),
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public."Users" OWNER TO dune;

--
-- Name: Users_id_seq; Type: SEQUENCE; Schema: public; Owner: dune
--

CREATE SEQUENCE public."Users_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Users_id_seq" OWNER TO dune;

--
-- Name: Users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: dune
--

ALTER SEQUENCE public."Users_id_seq" OWNED BY public."Users".id;


--
-- Name: favorite; Type: TABLE; Schema: public; Owner: dune
--

CREATE TABLE public.favorite (
    id integer NOT NULL,
    "userId" integer,
    favorite character varying(255),
    placeid character varying(255),
    place character varying(255),
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public.favorite OWNER TO dune;

--
-- Name: favorite_id_seq; Type: SEQUENCE; Schema: public; Owner: dune
--

CREATE SEQUENCE public.favorite_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.favorite_id_seq OWNER TO dune;

--
-- Name: favorite_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: dune
--

ALTER SEQUENCE public.favorite_id_seq OWNED BY public.favorite.id;


--
-- Name: Favorite id; Type: DEFAULT; Schema: public; Owner: dune
--

ALTER TABLE ONLY public."Favorite" ALTER COLUMN id SET DEFAULT nextval('public."Favorite_id_seq"'::regclass);


--
-- Name: Favorites id; Type: DEFAULT; Schema: public; Owner: dune
--

ALTER TABLE ONLY public."Favorites" ALTER COLUMN id SET DEFAULT nextval('public."Favorites_id_seq"'::regclass);


--
-- Name: MyTrips id; Type: DEFAULT; Schema: public; Owner: dune
--

ALTER TABLE ONLY public."MyTrips" ALTER COLUMN id SET DEFAULT nextval('public."MyTrips_id_seq"'::regclass);


--
-- Name: Photos id; Type: DEFAULT; Schema: public; Owner: dune
--

ALTER TABLE ONLY public."Photos" ALTER COLUMN id SET DEFAULT nextval('public."Photos_id_seq"'::regclass);


--
-- Name: Users id; Type: DEFAULT; Schema: public; Owner: dune
--

ALTER TABLE ONLY public."Users" ALTER COLUMN id SET DEFAULT nextval('public."Users_id_seq"'::regclass);


--
-- Name: favorite id; Type: DEFAULT; Schema: public; Owner: dune
--

ALTER TABLE ONLY public.favorite ALTER COLUMN id SET DEFAULT nextval('public.favorite_id_seq'::regclass);


--
-- Data for Name: Favorite; Type: TABLE DATA; Schema: public; Owner: dune
--

COPY public."Favorite" (id, "userId", placeid, place, "createdAt", "updatedAt") FROM stdin;
\.


--
-- Data for Name: Favorites; Type: TABLE DATA; Schema: public; Owner: dune
--

COPY public."Favorites" (id, "placeId", place, "userId", "createdAt", "updatedAt") FROM stdin;
\.


--
-- Data for Name: MyTrips; Type: TABLE DATA; Schema: public; Owner: dune
--

COPY public."MyTrips" (id, "placeId", place, "userId", reservations, "travelDates", "createdAt", "updatedAt", "placeURL", photo) FROM stdin;
1	city:2585	Tokyo	\N			2021-03-02 00:15:25.133-05	2021-03-02 00:15:25.133-05	https://go.sygic.com/travel/place?id=city:2585	https://media-cdn.sygictraveldata.com/media/city:2585
2	city:239131	Roswell	\N			2021-03-02 11:42:39.441-05	2021-03-02 11:42:39.441-05	https://go.sygic.com/travel/place?id=city:239131	https://media-cdn.sygictraveldata.com/media/city:239131
3	city:1842	Roswell, New Mexico	\N			2021-03-02 11:42:47.588-05	2021-03-02 11:42:47.588-05	https://go.sygic.com/travel/place?id=city:1842	https://media-cdn.sygictraveldata.com/media/city:1842
4	city:2585	Tokyo	\N			2021-03-02 19:07:02.406-05	2021-03-02 19:07:02.406-05	https://go.sygic.com/travel/place?id=city:2585	https://media-cdn.sygictraveldata.com/media/city:2585
5	city:1751	Tampa	\N			2021-03-02 19:08:30.152-05	2021-03-02 19:08:30.152-05	https://go.sygic.com/travel/place?id=city:1751	https://media-cdn.sygictraveldata.com/media/city:1751
6	city:2585	Tokyo	\N			2021-03-02 19:09:05.536-05	2021-03-02 19:09:05.536-05	https://go.sygic.com/travel/place?id=city:2585	https://media-cdn.sygictraveldata.com/media/city:2585
7	city:2585	Tokyo	\N			2021-03-02 19:12:44.141-05	2021-03-02 19:12:44.141-05	https://go.sygic.com/travel/place?id=city:2585	https://media-cdn.sygictraveldata.com/media/city:2585
8	city:8600	Fuchū	\N			2021-03-02 19:36:32.672-05	2021-03-02 19:36:32.672-05	https://go.sygic.com/travel/place?id=city:8600	https://media-cdn.sygictraveldata.com/media/city:8600
9	poi:37404248	Thailand	\N			2021-03-02 19:48:39.68-05	2021-03-02 19:48:39.68-05	https://go.sygic.com/travel/place?id=poi:37404248	\N
10	country:47	Thailand	\N			2021-03-02 20:51:31.964-05	2021-03-02 20:51:31.964-05	https://go.sygic.com/travel/place?id=country:47	https://media-cdn.sygictraveldata.com/media/country:47
11	city:8391	Nishitokyo	\N			2021-03-03 17:42:41.07-05	2021-03-03 17:42:41.07-05	https://go.sygic.com/travel/place?id=city:8391	https://media-cdn.sygictraveldata.com/media/city:8391
12	country:75	Japan	\N			2021-03-03 17:43:02.754-05	2021-03-03 17:43:02.754-05	https://go.sygic.com/travel/place?id=country:75	https://media-cdn.sygictraveldata.com/media/country:75
13	city:3162	Jaffna	\N			2021-03-03 17:43:03.451-05	2021-03-03 17:43:03.451-05	https://go.sygic.com/travel/place?id=city:3162	https://media-cdn.sygictraveldata.com/media/city:3162
14	city:694074	Chita	\N			2021-03-03 17:43:04.1-05	2021-03-03 17:43:04.1-05	https://go.sygic.com/travel/place?id=city:694074	https://media-cdn.sygictraveldata.com/media/city:694074
15	country:91	South Korea	\N			2021-03-03 17:43:50.297-05	2021-03-03 17:43:50.297-05	https://go.sygic.com/travel/place?id=country:91	https://media-cdn.sygictraveldata.com/media/country:91
16	poi:35286043	Korea-eiland	\N			2021-03-03 17:43:52.665-05	2021-03-03 17:43:52.665-05	https://go.sygic.com/travel/place?id=poi:35286043	\N
17	country:91	South Korea	\N			2021-03-03 17:45:01.34-05	2021-03-03 17:45:01.34-05	https://go.sygic.com/travel/place?id=country:91	https://media-cdn.sygictraveldata.com/media/country:91
18	region:24436	South Hamgyong Province	\N			2021-03-03 17:45:02.146-05	2021-03-03 17:45:02.146-05	https://go.sygic.com/travel/place?id=region:24436	\N
19	poi:31239810	Bukkane	\N			2021-03-03 17:53:29.569-05	2021-03-03 17:53:29.569-05	https://go.sygic.com/travel/place?id=poi:31239810	\N
20	poi:33902232	Bukkan	\N			2021-03-03 17:53:35.811-05	2021-03-03 17:53:35.811-05	https://go.sygic.com/travel/place?id=poi:33902232	\N
21	city:8391	Nishitokyo	\N			2021-03-03 17:55:07.573-05	2021-03-03 17:55:07.573-05	https://go.sygic.com/travel/place?id=city:8391	https://media-cdn.sygictraveldata.com/media/city:8391
22	country:91	South Korea	\N			2021-03-03 17:57:48.795-05	2021-03-03 17:57:48.795-05	https://go.sygic.com/travel/place?id=country:91	https://media-cdn.sygictraveldata.com/media/country:91
23	city:3072	Mumbai	\N			2021-03-03 17:58:35.999-05	2021-03-03 17:58:35.999-05	https://go.sygic.com/travel/place?id=city:3072	https://media-cdn.sygictraveldata.com/media/city:3072
24	poi:2330630	Embassy of South Korea	\N			2021-03-03 18:00:57.543-05	2021-03-03 18:00:57.543-05	https://go.sygic.com/travel/place?id=poi:2330630	https://media-cdn.sygictraveldata.com/media/poi:2330630
25	region:24436	South Hamgyong Province	\N			2021-03-03 18:01:00.669-05	2021-03-03 18:01:00.669-05	https://go.sygic.com/travel/place?id=region:24436	\N
26	city:8391	Nishitokyo	\N			2021-03-03 18:39:18.829-05	2021-03-03 18:39:18.829-05	https://go.sygic.com/travel/place?id=city:8391	https://media-cdn.sygictraveldata.com/media/city:8391
27	city:8391	Nishitokyo	\N			2021-03-03 18:46:51.373-05	2021-03-03 18:46:51.373-05	https://go.sygic.com/travel/place?id=city:8391	https://media-cdn.sygictraveldata.com/media/city:8391
28	city:437	Perugia	\N			2021-03-03 18:58:22.024-05	2021-03-03 18:58:22.024-05	https://go.sygic.com/travel/place?id=city:437	https://media-cdn.sygictraveldata.com/media/city:437
29	city:437	Perugia	\N			2021-03-03 19:14:41.972-05	2021-03-03 19:14:41.972-05	https://go.sygic.com/travel/place?id=city:437	https://media-cdn.sygictraveldata.com/media/city:437
30	city:437	Perugia	\N			2021-03-03 19:15:06.33-05	2021-03-03 19:15:06.33-05	https://go.sygic.com/travel/place?id=city:437	https://media-cdn.sygictraveldata.com/media/city:437
31	city:437	Perugia	\N			2021-03-03 20:39:19.616-05	2021-03-03 20:39:19.616-05	https://go.sygic.com/travel/place?id=city:437	https://media-cdn.sygictraveldata.com/media/city:437
\.


--
-- Data for Name: Photos; Type: TABLE DATA; Schema: public; Owner: dune
--

COPY public."Photos" (id, title, url, "userId", "createdAt", "updatedAt") FROM stdin;
\.


--
-- Data for Name: SequelizeMeta; Type: TABLE DATA; Schema: public; Owner: dune
--

COPY public."SequelizeMeta" (name) FROM stdin;
20210217010849-create-user.js
20210217011424-create-my-trips.js
20210227161731-linkingTables.js
20210227162245-linkingTables2.js
20210227162341-addFirstName.js
20210301033139-create-favorite.js
20210301042703-Favorite.js
20210301214654-create-photo.js
20210301214848-create-favorites.js
20210302000909-addPlaceDetail.js
20210302001030-favorites2.js
20210302001324-places.js
\.


--
-- Data for Name: Users; Type: TABLE DATA; Schema: public; Owner: dune
--

COPY public."Users" (id, "firstName", "lastName", email, "myTripId", "travelDates", "createdAt", "updatedAt") FROM stdin;
\.


--
-- Data for Name: favorite; Type: TABLE DATA; Schema: public; Owner: dune
--

COPY public.favorite (id, "userId", favorite, placeid, place, "createdAt", "updatedAt") FROM stdin;
\.


--
-- Name: Favorite_id_seq; Type: SEQUENCE SET; Schema: public; Owner: dune
--

SELECT pg_catalog.setval('public."Favorite_id_seq"', 1, false);


--
-- Name: Favorites_id_seq; Type: SEQUENCE SET; Schema: public; Owner: dune
--

SELECT pg_catalog.setval('public."Favorites_id_seq"', 1, false);


--
-- Name: MyTrips_id_seq; Type: SEQUENCE SET; Schema: public; Owner: dune
--

SELECT pg_catalog.setval('public."MyTrips_id_seq"', 31, true);


--
-- Name: Photos_id_seq; Type: SEQUENCE SET; Schema: public; Owner: dune
--

SELECT pg_catalog.setval('public."Photos_id_seq"', 1, false);


--
-- Name: Users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: dune
--

SELECT pg_catalog.setval('public."Users_id_seq"', 1, false);


--
-- Name: favorite_id_seq; Type: SEQUENCE SET; Schema: public; Owner: dune
--

SELECT pg_catalog.setval('public.favorite_id_seq', 1, false);


--
-- Name: Favorite Favorite_pkey; Type: CONSTRAINT; Schema: public; Owner: dune
--

ALTER TABLE ONLY public."Favorite"
    ADD CONSTRAINT "Favorite_pkey" PRIMARY KEY (id);


--
-- Name: Favorites Favorites_pkey; Type: CONSTRAINT; Schema: public; Owner: dune
--

ALTER TABLE ONLY public."Favorites"
    ADD CONSTRAINT "Favorites_pkey" PRIMARY KEY (id);


--
-- Name: MyTrips MyTrips_pkey; Type: CONSTRAINT; Schema: public; Owner: dune
--

ALTER TABLE ONLY public."MyTrips"
    ADD CONSTRAINT "MyTrips_pkey" PRIMARY KEY (id);


--
-- Name: Photos Photos_pkey; Type: CONSTRAINT; Schema: public; Owner: dune
--

ALTER TABLE ONLY public."Photos"
    ADD CONSTRAINT "Photos_pkey" PRIMARY KEY (id);


--
-- Name: SequelizeMeta SequelizeMeta_pkey; Type: CONSTRAINT; Schema: public; Owner: dune
--

ALTER TABLE ONLY public."SequelizeMeta"
    ADD CONSTRAINT "SequelizeMeta_pkey" PRIMARY KEY (name);


--
-- Name: Users Users_pkey; Type: CONSTRAINT; Schema: public; Owner: dune
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_pkey" PRIMARY KEY (id);


--
-- Name: favorite favorite_pkey; Type: CONSTRAINT; Schema: public; Owner: dune
--

ALTER TABLE ONLY public.favorite
    ADD CONSTRAINT favorite_pkey PRIMARY KEY (id);


--
-- Name: Favorite Favorite_userId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: dune
--

ALTER TABLE ONLY public."Favorite"
    ADD CONSTRAINT "Favorite_userId_fkey" FOREIGN KEY ("userId") REFERENCES public."Users"(id) ON DELETE CASCADE;


--
-- Name: Favorites Favorites_userId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: dune
--

ALTER TABLE ONLY public."Favorites"
    ADD CONSTRAINT "Favorites_userId_fkey" FOREIGN KEY ("userId") REFERENCES public."Users"(id) ON DELETE CASCADE;


--
-- Name: MyTrips MyTrips_userId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: dune
--

ALTER TABLE ONLY public."MyTrips"
    ADD CONSTRAINT "MyTrips_userId_fkey" FOREIGN KEY ("userId") REFERENCES public."Users"(id) ON DELETE CASCADE;


--
-- Name: favorite favorite_userId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: dune
--

ALTER TABLE ONLY public.favorite
    ADD CONSTRAINT "favorite_userId_fkey" FOREIGN KEY ("userId") REFERENCES public."Users"(id) ON DELETE CASCADE;


--
-- PostgreSQL database dump complete
--

