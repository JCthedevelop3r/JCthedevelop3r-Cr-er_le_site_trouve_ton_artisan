import { Injectable } from '@angular/core';
import { Artisan } from './components/artisan/artisan.model';

@Injectable({
  providedIn: 'root'
})
export class DataArtisansService {

  constructor() { }

  dataArtisans: Artisan[] = [
    {
      id: 1,
      identity: "John Doe",
      pictureArtisan: "assets/images/img-artisans/image-artisan-1.png",
      altArtisan: "Artisan qui sourit",
      pictureStars: "assets/images/etoiles-jaunes-5.png",
      altStars: "5 étoiles jaunes",
      speciality: "Bâtiment",
      location: "23 Rue Carnot, Décines-Charpieu, 69150",
      maps: "https://www.google.fr/maps/place/23+Rue+Carnot,+69150+D%C3%A9cines-Charpieu/@45.7633655,4.9666063,16z/data=!3m1!4b1!4m6!3m5!1s0x47f4c725f865faeb:0xe80bfe09a173e40!8m2!3d45.7633618!4d4.9691812!16s%2Fg%2F11c5n2_1q7?entry=ttu",
      about: "John Doe, expert en bâtiment, a suivi une formation approfondie dans l'ingénierie de construction avant de se lancer dans une carrière enrichissante. Au fil des années, John a mené à bien plusieurs projets remarquables, incluant la rénovation de monuments historiques et la construction de résidences modernes. Sa compétence et son dévouement lui ont valu une solide réputation dans le domaine.",
      website:"johndoe-artisan.com",
    },

    {
      id: 2,
      identity: "Jena Douglas",
      pictureArtisan: "assets/images/img-artisans/image-artisan-2.png",
      altArtisan: "Artisane qui sourit",
      pictureStars: "assets/images/etoiles-jaunes-4.png",
      altStars: "4 étoiles jaunes",
      speciality: "Bâtiment",
      location: "103 Rue de la Vaillance, Clermont-Ferrand, 63100",
      maps: "https://www.google.fr/maps/place/103+Rue+de+la+Vaillance,+63100+Clermont-Ferrand/@45.8107866,3.119674,17z/data=!3m1!4b1!4m6!3m5!1s0x47f71ec445994d79:0x321386b6e681208c!8m2!3d45.8107829!4d3.1222489!16s%2Fg%2F11c1h87zpb?entry=ttu",
      about: "Jena Douglas, experte en bâtiment, a suivi une formation approfondie dans l'ingénierie de construction avant de se lancer dans une carrière enrichissante. Au fil des années, Jena a mené à bien plusieurs projets remarquables, incluant la rénovation de monuments historiques et la construction de résidences modernes. Sa compétence et son dévouement lui ont valu une solide réputation dans le domaine.",
      website:"jeandouglas-artisan.com",
    },

    {
      id: 3,
      identity: "Cédric Thomas",
      pictureArtisan: "assets/images/img-artisans/image-artisan-3.png",
      altArtisan: "Artisan qui sourit",
      pictureStars: "assets/images/etoiles-jaunes-5.png",
      altStars: "5 étoiles jaunes",
      speciality: "Bâtiment",
      location: "47 Rue du Cheval, Clermont-Ferrand, 63100",
      maps: "https://www.google.fr/maps/place/47+Rue+du+Cheval,+63100+Clermont-Ferrand/@45.8066462,3.1024823,17z/data=!3m1!4b1!4m6!3m5!1s0x47f71935a579888b:0x97695688a962a2ee!8m2!3d45.8066425!4d3.1050572!16s%2Fg%2F11c1609j_c?entry=ttu",
      about: "Cédric Thomas, expert en bâtiment, a suivi une formation approfondie dans l'ingénierie de construction avant de se lancer dans une carrière enrichissante. Au fil des années, Cédric a mené à bien plusieurs projets remarquables, incluant la rénovation de monuments historiques et la construction de résidences modernes. Sa compétence et son dévouement lui ont valu une solide réputation dans le domaine.",
      website:"cédricthomas-artisan.com",
    },

    {
      id: 4,
      identity: "Christine Lacraie",
      pictureArtisan: "assets/images/img-artisans/image-artisan-4.png",
      altArtisan: "Artisane qui sourit",
      pictureStars: "assets/images/etoiles-jaunes-5.png",
      altStars: "5 étoiles jaunes",
      speciality: "Bâtiment",
      location: "18 Rue Fantin Latour, Grenoble, 38000",
      maps: "https://www.google.fr/maps/place/18+Rue+Fantin+Latour,+38000+Grenoble/@45.1866798,5.7300788,16z/data=!3m1!4b1!4m6!3m5!1s0x478af4f32fe63f1f:0x77a0413c1b0f7ad!8m2!3d45.186676!4d5.7326537!16s%2Fg%2F11csdfvxpl?entry=ttu",
      about: "Christine Lacraie, experte en bâtiment, a suivi une formation approfondie dans l'ingénierie de construction avant de se lancer dans une carrière enrichissante. Au fil des années, Christine a mené à bien plusieurs projets remarquables, incluant la rénovation de monuments historiques et la construction de résidences modernes. Sa compétence et son dévouement lui ont valu une solide réputation dans le domaine.",
      website:"christinelacraie-artisan.com",
    },

    {
      id: 5,
      identity: "Quentin Lejeune",
      pictureArtisan: "assets/images/img-artisans/image-artisan-5.png",
      altArtisan: "Artisan qui sourit",
      pictureStars: "assets/images/etoiles-jaunes-4.png",
      altStars: "4 étoiles jaunes",
      speciality: "Bâtiment",
      location: "19 Rue Sisteron, Seyssinet-Pariset, 38170",
      maps: "https://www.google.fr/maps/place/19+Rue+Sisteron,+38170+Seyssinet-Pariset/@45.1770634,5.6940562,16z/data=!3m1!4b1!4m6!3m5!1s0x478af36817d5bedf:0x6ba3192aa477c766!8m2!3d45.1770596!4d5.6966311!16s%2Fg%2F11c2ht13t6?entry=ttu",
      about: "Quentin Lejeune, expert en bâtiment, a suivi une formation approfondie dans l'ingénierie de construction avant de se lancer dans une carrière enrichissante. Au fil des années, Quentin a mené à bien plusieurs projets remarquables, incluant la rénovation de monuments historiques et la construction de résidences modernes. Sa compétence et son dévouement lui ont valu une solide réputation dans le domaine.",
      website:"quentinlejeune-artisan.com",
    },

    {
      id: 6,
      identity: "Jeanne Delion",
      pictureArtisan: "assets/images/img-artisans/image-artisan-6.png",
      altArtisan: "Artisane qui sourit",
      pictureStars: "assets/images/etoiles-jaunes-5.png",
      altStars: "5 étoiles jaunes",
      speciality: "Services",
      location: "19 Rue de la Corderie, Lyon, 69009",
      maps: "https://www.google.fr/maps/place/19+Rue+de+la+Corderie,+69009+Lyon/@45.7767635,4.8030665,16z/data=!3m1!4b1!4m6!3m5!1s0x47f4eb6dcdb52bcd:0x27dbe224c1493eaf!8m2!3d45.7767598!4d4.8056414!16s%2Fg%2F11c4p1lf5d?entry=ttu",
      about: "Jeanne Delion, spécialisée dans les services, a suivi une formation rigoureuse en gestion des services avant de se distinguer dans sa carrière. Elle a dirigé plusieurs initiatives clés, y compris l'optimisation de services pour de grandes entreprises et la mise en œuvre de solutions innovantes. Son engagement et son expertise font d'elle une référence dans le secteur.",
      website:"jeannedelion-artisan.com",
    },

    {
      id: 7,
      identity: "Fredéric Rameur",
      pictureArtisan: "assets/images/img-artisans/image-artisan-7.png",
      altArtisan: "Artisan qui sourit",
      pictureStars: "assets/images/etoiles-jaunes-3.png",
      altStars: "3 étoiles jaunes",
      speciality: "Services",
      location: "5 Rue Jean Zay, Lyon, 69009",
      maps: "https://www.google.fr/maps/place/5+Rue+Jean+Zay,+69009+Lyon/@45.7672195,4.7998967,17z/data=!3m1!4b1!4m6!3m5!1s0x47f4eb7664fafaf5:0x1c3a7c9a8a08abf0!8m2!3d45.7672158!4d4.8024716!16s%2Fg%2F11cpc6vg77?entry=ttu",
      about: "Fredéric Rameur, spécialisé dans les services, a suivi une formation rigoureuse en gestion des services avant de se distinguer dans sa carrière. Il a dirigé plusieurs initiatives clés, y compris l'optimisation de services pour de grandes entreprises et la mise en œuvre de solutions innovantes. Son engagement et son expertise font de lui une référence dans le secteur.",
      website:"fredéricrameur-artisan.com",
    },

    {
      id: 8,
      identity: "Samira Azzeraoui",
      pictureArtisan: "assets/images/img-artisans/image-artisan-8.png",
      altArtisan: "Artisane qui sourit",
      pictureStars: "assets/images/etoiles-jaunes-5.png",
      altStars: "5 étoiles jaunes",
      speciality: "Services",
      location: "21 Rue Maréchal Foch, Villeurbanne, 69100",
      maps: "https://www.google.fr/maps/place/21+Rue+Mar%C3%A9chal+Foch,+69100+Villeurbanne/@45.7530304,4.9028829,16z/data=!3m1!4b1!4m6!3m5!1s0x47f4c1afa7835aab:0x6d847a70453dc17d!8m2!3d45.7530267!4d4.9054578!16s%2Fg%2F11c19pp1g2?entry=ttu",
      about: "Samira Azzeraoui, spécialisée dans les services, a suivi une formation rigoureuse en gestion des services avant de se distinguer dans sa carrière. Elle a dirigé plusieurs initiatives clés, y compris l'optimisation de services pour de grandes entreprises et la mise en œuvre de solutions innovantes. Son engagement et son expertise font d'elle une référence dans le secteur.",
      website:"samiraazzeraoui-artisan.com",
    },

    {
      id: 9,
      identity: "Loic Reddy",
      pictureArtisan: "assets/images/img-artisans/image-artisan-9.png",
      altArtisan: "Artisan qui sourit",
      pictureStars: "assets/images/etoiles-jaunes-4.png",
      altStars: "4 étoiles jaunes",
      speciality: "Services",
      location: "7 Rue Guyot, Caluire-et-Cuire, 69300",
      maps: "https://www.google.fr/maps/place/7+Rue+Guyot,+69300+Caluire-et-Cuire/@45.7897904,4.8319276,17z/data=!3m1!4b1!4m6!3m5!1s0x47f4ead8866c94d3:0xb6d23a8807fe7d95!8m2!3d45.7897867!4d4.8345025!16s%2Fg%2F11cpk_zzs4?entry=ttu",
      about: "Loic Reddy, spécialisé dans les services, a suivi une formation rigoureuse en gestion des services avant de se distinguer dans sa carrière. Il a dirigé plusieurs initiatives clés, y compris l'optimisation de services pour de grandes entreprises et la mise en œuvre de solutions innovantes. Son engagement et son expertise font de lui une référence dans le secteur.",
      website:"loicreddy-artisan.com",
    },

    {
      id: 10,
      identity: "Érica Touré",
      pictureArtisan: "assets/images/img-artisans/image-artisan-10.png",
      altArtisan: "Artisane qui sourit",
      pictureStars: "assets/images/etoiles-jaunes-4.png",
      altStars: "4 étoiles jaunes",
      speciality: "Services",
      location: "84 Rue Bechevelin, Lyon, 69007",
      maps: "https://www.google.fr/maps/place/84+Rue+Bechevelin,+69007+Lyon/@45.7485589,4.8360986,17z/data=!3m1!4b1!4m6!3m5!1s0x47f4ea46140389b5:0xeaf123f1f002a056!8m2!3d45.7485552!4d4.8386735!16s%2Fg%2F11b8yhg_jl?entry=ttu",
      about: "Érica Touré, spécialisée dans les services, a suivi une formation rigoureuse en gestion des services avant de se distinguer dans sa carrière. Elle a dirigé plusieurs initiatives clés, y compris l'optimisation de services pour de grandes entreprises et la mise en œuvre de solutions innovantes. Son engagement et son expertise font d'elle une référence dans le secteur.",
      website:"éricatouré-artisan.com",
    },

    {
      id: 11,
      identity: "Paul Dupont",
      pictureArtisan: "assets/images/img-artisans/image-artisan-11.png",
      altArtisan: "Artisan qui sourit",
      pictureStars: "assets/images/etoiles-jaunes-5.png",
      altStars: "5 étoiles jaunes",
      speciality: "Fabrication",
      location: "31 Boulevard Pasteur, Clermont-Ferrand, 63000",
      maps: "https://www.google.fr/maps/place/31+Bd+Pasteur,+63000+Clermont-Ferrand/@45.7727711,3.0750529,16z/data=!3m1!4b1!4m6!3m5!1s0x47f71bc419403b79:0x390e82cfe443e1c1!8m2!3d45.7727674!4d3.0776278!16s%2Fg%2F11c15lwzdh?entry=ttu",
      about: "Paul Dupont, expert en fabrication, a reçu une formation complète en techniques de fabrication avant de se forger une carrière impressionnante. Il a réalisé plusieurs projets d'envergure, notamment la production de pièces de haute précision pour diverses industries. Son savoir-faire et son innovation lui ont permis de se démarquer dans le domaine.",
      website:"pauldupont-artisan.com",
    },

    {
      id: 12,
      identity: "Paula Gonzalez",
      pictureArtisan: "assets/images/img-artisans/image-artisan-12.png",
      altArtisan: "Artisane qui sourit",
      pictureStars: "assets/images/etoiles-jaunes-5.png",
      altStars: "5 étoiles jaunes",
      speciality: "Fabrication",
      location: "9 Rue Chautard, Aubière, 63170",
      maps: "https://www.google.fr/maps/place/9+Rue+Chautard,+63170+Aubi%C3%A8re/@45.7483275,3.1094159,17z/data=!3m1!4b1!4m6!3m5!1s0x47f71c7d52879519:0xb9940eb4ff57c14f!8m2!3d45.7483238!4d3.1119908!16s%2Fg%2F11c1bjp_00?entry=ttu",
      about: "Paula Gonzalez, experte en fabrication, a reçu une formation complète en techniques de fabrication avant de se forger une carrière impressionnante. Elle a réalisé plusieurs projets d'envergure, notamment la production de pièces de haute précision pour diverses industries. Son savoir-faire et son innovation lui ont permis de se démarquer dans le domaine.",
      website:"paulagonzalez-artisan.com",
    },

    {
      id: 13,
      identity: "Francis Ngo",
      pictureArtisan: "assets/images/img-artisans/image-artisan-13.png",
      altArtisan: "Artisan qui sourit",
      pictureStars: "assets/images/etoiles-jaunes-5.png",
      altStars: "5 étoiles jaunes",
      speciality: "Fabrication",
      location: "64 Rue Servient, Lyon, 69003",
      maps: "https://www.google.fr/maps/place/64+Rue+Servient,+69003+Lyon/@45.7601982,4.8454511,17z/data=!3m1!4b1!4m6!3m5!1s0x47f4ea5e5bd4a985:0x612352af5d552419!8m2!3d45.7601945!4d4.848026!16s%2Fg%2F11bw4dh5x0?entry=ttu",
      about: "Francis Ngo, expert en fabrication, a reçu une formation complète en techniques de fabrication avant de se forger une carrière impressionnante. Il a réalisé plusieurs projets d'envergure, notamment la production de pièces de haute précision pour diverses industries. Son savoir-faire et son innovation lui ont permis de se démarquer dans le domaine.",
      website:"francisngo-artisan.com",
    },

    {
      id: 14,
      identity: "Claire Dupuis",
      pictureArtisan: "assets/images/img-artisans/image-artisan-14.png",
      altArtisan: "Artisane qui sourit",
      pictureStars: "assets/images/etoiles-jaunes-5.png",
      altStars: "5 étoiles jaunes",
      speciality: "Fabrication",
      location: "11 Route de Chevennes, Annecy, 74960",
      maps: "https://www.google.fr/maps/place/11+Rte+de+Chevennes,+74960+Annecy/@45.9051311,6.1055572,16z/data=!3m1!4b1!4m6!3m5!1s0x478b854502d4aa25:0x9cbf3cf02fe3a313!8m2!3d45.9051274!4d6.1081321!16s%2Fg%2F11crr_jcpx?entry=ttu",
      about: "Claire Dupuis, experte en fabrication, a reçu une formation complète en techniques de fabrication avant de se forger une carrière impressionnante. Elle a réalisé plusieurs projets d'envergure, notamment la production de pièces de haute précision pour diverses industries. Son savoir-faire et son innovation lui ont permis de se démarquer dans le domaine.",
      website:"clairedupuis-artisan.com",
    },

    {
      id: 15,
      identity: "Jean Lecomte",
      pictureArtisan: "assets/images/img-artisans/image-artisan-15.png",
      altArtisan: "Artisan qui sourit",
      pictureStars: "assets/images/etoiles-jaunes-5.png",
      altStars: "5 étoiles jaunes",
      speciality: "Fabrication",
      location: "4 Rue du Square, Annecy, 74960",
      maps: "https://www.google.fr/maps/place/4+Rue+du+Square,+74960+Annecy/@45.9052904,6.1060939,16z/data=!3m1!4b1!4m6!3m5!1s0x478b8544e04b15ad:0xba66b701f7aba041!8m2!3d45.9052867!4d6.1086688!16s%2Fg%2F11cphx_nc4?entry=ttu",
      about: "Jean Lecomte, expert en fabrication, a reçu une formation complète en techniques de fabrication avant de se forger une carrière impressionnante. Il a réalisé plusieurs projets d'envergure, notamment la production de pièces de haute précision pour diverses industries. Son savoir-faire et son innovation lui ont permis de se démarquer dans le domaine.",
      website:"jeanlecomte-artisan.com",
    },

    {
      id: 16,
      identity: "Albert Martin",
      pictureArtisan: "assets/images/img-artisans/image-artisan-16.png",
      altArtisan: "Artisan qui sourit",
      pictureStars: "assets/images/etoiles-jaunes-3.png",
      altStars: "3 étoiles jaunes",
      speciality: "Alimentation",
      location: "76 Rue du 4 Septembre, Valence, 26000",
      maps: "https://www.google.fr/maps/place/76+Rue+du+4+Septembre,+26000+Valence/@44.9257919,4.9048453,17z/data=!3m1!4b1!4m6!3m5!1s0x47f55784efa2fbe3:0xba89588271e533b3!8m2!3d44.9257881!4d4.9074202!16s%2Fg%2F11c4xym4y_?entry=ttu",
      about: "Albert Martin, spécialiste de l'alimentation, a suivi une formation approfondie en sciences alimentaires avant de se distinguer dans sa carrière. Il a mené plusieurs projets réussis, y compris le développement de nouvelles recettes et l'amélioration des normes de qualité. Sa passion et son expertise en font un leader dans le secteur.",
      website:"albertmartin-artisan.com",
    },

    {
      id: 17,
      identity: "Sylvie Bernard",
      pictureArtisan: "assets/images/img-artisans/image-artisan-17.png",
      altArtisan: "Artisane qui sourit",
      pictureStars: "assets/images/etoiles-jaunes-5.png",
      altStars: "5 étoiles jaunes",
      speciality: "Alimentation",
      location: "15 Allée Jean Giono, Valence, 26000",
      maps: "https://www.google.fr/maps/place/15+All.+Jean+Giono,+26000+Valence/@44.9212693,4.9116157,17z/data=!3m1!4b1!4m6!3m5!1s0x47f5579737ccc107:0x52bb779e210b7f3f!8m2!3d44.9212655!4d4.9141906!16s%2Fg%2F11cpk6fm02?entry=ttu",
      about: "Sylvie Bernard, spécialiste de l'alimentation, a suivi une formation approfondie en sciences alimentaires avant de se distinguer dans sa carrière. Elle a mené plusieurs projets réussis, y compris le développement de nouvelles recettes et l'amélioration des normes de qualité. Sa passion et son expertise en font un leader dans le secteur.",
      website:"sylviebernard-artisan.com",
    },

    {
      id: 18,
      identity: "Karim Petit",
      pictureArtisan: "assets/images/img-artisans/image-artisan-18.png",
      altArtisan: "Artisan qui sourit",
      pictureStars: "assets/images/etoiles-jaunes-3.png",
      altStars: "3 étoiles jaunes",
      speciality: "Alimentation",
      location: "57 Rue Pablo Neruda, Clermont-Ferrand, 63000",
      maps: "https://www.google.fr/maps/place/57+Rue+Pablo+Neruda,+63000+Clermont-Ferrand/@45.7673339,3.1185883,17z/data=!3m1!4b1!4m6!3m5!1s0x47f71c14c48c6f83:0xed0a5af4246358d2!8m2!3d45.7673302!4d3.1211632!16s%2Fg%2F11crvxlnwk?entry=ttu",
      about: "Karim Petit, spécialiste de l'alimentation, a suivi une formation approfondie en sciences alimentaires avant de se distinguer dans sa carrière. Il a mené plusieurs projets réussis, y compris le développement de nouvelles recettes et l'amélioration des normes de qualité. Sa passion et son expertise en font un leader dans le secteur.",
      website:"karimpetit-artisan.com",
    },

    {
      id: 19,
      identity: "Alexandra Moreau",
      pictureArtisan: "assets/images/img-artisans/image-artisan-19.png",
      altArtisan: "Artisane qui sourit",
      pictureStars: "assets/images/etoiles-jaunes-4.png",
      altStars: "4 étoiles jaunes",
      speciality: "Alimentation",
      location: "13 Allée des Cyclamens, Clermont-Ferrand, 63000",
      maps: "https://www.google.fr/maps/place/13+All.+des+Cyclamens,+63000+Clermont-Ferrand/@45.7746809,3.1189622,17z/data=!3m1!4b1!4m6!3m5!1s0x47f71c1715133f09:0x5449abad589e3f50!8m2!3d45.7746772!4d3.1215371!16s%2Fg%2F11c2hlkt5h?entry=ttu",
      about: "Alexandra Moreau, spécialiste de l'alimentation, a suivi une formation approfondie en sciences alimentaires avant de se distinguer dans sa carrière. Elle a mené plusieurs projets réussis, y compris le développement de nouvelles recettes et l'amélioration des normes de qualité. Sa passion et son expertise en font un leader dans le secteur.",
      website:"alexandramoreau-artisan.com",
    },

    {
      id: 20,
      identity: "Thomas Dubois",
      pictureArtisan: "assets/images/img-artisans/image-artisan-20.png",
      altArtisan: "Artisan qui sourit",
      pictureStars: "assets/images/etoiles-jaunes-5.png",
      altStars: "5 étoiles jaunes",
      speciality: "Alimentation",
      location: "7 Rue Chautard, Aubière, 63170",
      maps: "https://www.google.fr/maps/place/7+Rue+Chautard,+63170+Aubi%C3%A8re/@45.7484129,3.1093785,17z/data=!3m1!4b1!4m6!3m5!1s0x47f71c7d4d972c81:0x3af9ab68f8fdfb2b!8m2!3d45.7484092!4d3.1119534!16s%2Fg%2F11c447jxgt?entry=ttu",
      about: "Thomas Dubois, spécialiste de l'alimentation, a suivi une formation approfondie en sciences alimentaires avant de se distinguer dans sa carrière. Il a mené plusieurs projets réussis, y compris le développement de nouvelles recettes et l'amélioration des normes de qualité. Sa passion et son expertise en font un leader dans le secteur.",
      website:"thomasdubois-artisan.com",
    }
  ]

  getArtisans(): Artisan[] {
    return this.dataArtisans;
  }

  getFilteredArtisans() {
    return this.dataArtisans.map(artisan => ({
      id: artisan.id,
      identity: artisan.identity,
      speciality: artisan.speciality,
      location: artisan.location
    }));
  }
}
