// // pages/index.js
'use client';

import { useState, useEffect, SetStateAction } from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';

export default function Home() {
  const [currentChapter, setCurrentChapter] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [revealText, setRevealText] = useState(false);

  useEffect(() => {
    // Simulation d'un chargement initial avec effet cinématographique
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);
    
    // Révéler le texte progressivement après le chargement
    const textTimer = setTimeout(() => {
      setRevealText(true);
    }, 3000);
    
    return () => {
      clearTimeout(timer);
      clearTimeout(textTimer);
    };
  }, []);

  const chapters = [
    { id: 0, name: "Accueil", icon: "✦" },
    { id: 1, name: "Chapitre 1", icon: "❶" },
    { id: 2, name: "Chapitre 2", icon: "❷" },
    { id: 3, name: "Chapitre 3", icon: "❸" }
  ];

  // Zones pour photos et messages personnalisés
  const photoSpots = [
    {
      id: 1,
      title: "Toi ...",
      message: "Tu dégages une force tranquille. Une grâce discrète. Quelque chose de beau qu’on ne peut ignorer.",
      color: "from-amber-500/20 to-rose-500/20",
      imageUrl:'1.jpeg'
    },
    {
      id: 2,
      title: "Ton monde artistique",
      message: "Je sais une chose, : ton cœur bat pour l’audiovisuel. Continue de rêver, de créer, de voir le monde autrement...",
      color: "from-cyan-500/20 to-blue-500/20",
      imageUrl:'2.jpeg'
    },
   
    {
      id: 4,
      title: "Un jour spécial",
      message: "En ce jour qui célèbre ton existence, je voulais te créer quelque chose d'aussi unique que toi.",
      color: "from-emerald-500/20 to-teal-500/20",
      imageUrl:'3.jpeg'
    },
    
  ];

  const cinemaQuotes = [
    "La vie n'est pas un film, mais on peut la filmer comme tel.",
    "Chaque sourire est une scène qui mérite d'être capturée.",
    "Aujourd'hui, tu es la star de ton propre film anniversaire.",
    "Les meilleurs souvenirs méritent les meilleurs plans-séquences.",
    "La magie du cinéma est de transformer l'ordinaire en extraordinaire."
  ];

  const navigateTo = (chapter: SetStateAction<number>) => {
    setCurrentChapter(chapter);
  };

  const nextChapter = () => {
    if (currentChapter < 3) {
      setCurrentChapter(currentChapter + 1);
    }
  };

  const prevChapter = () => {
    if (currentChapter > 0) {
      setCurrentChapter(currentChapter - 1);
    }
  };

  // Variants pour les animations
  const pageVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 1 } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.5 } }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const letterVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const ChapterHome = () => {
    const title = "Joyeux Anniversaire ";
    
    return (
      <motion.div 
        className="h-screen flex flex-col items-center justify-center relative overflow-hidden"
        initial="initial"
        animate="animate"
        exit="exit"
        variants={pageVariants}
      >
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-[#0c1522]/90 z-10"></div>
          <div className="absolute inset-0 bg-cover bg-center z-0 filter brightness-75" 
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1521898284481-a5ec348cb555?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80')" }}>
          </div>
          {/* Overlay cinématique */}
          <div className="absolute inset-0 bg-[#d4af37]/5 mix-blend-overlay z-10"></div>
          {/* Grain effect */}
          <div className="absolute inset-0 opacity-30 z-10 bg-noise"></div>
        </div>
        
        <div className="z-20 text-center px-6 max-w-3xl">
          <motion.div
            className="mb-8"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            {title.split('').map((letter, index) => (
              <motion.span 
                key={index}
                className="font-serif text-5xl md:text-7xl inline-block mx-1 text-white relative"
                variants={letterVariants}
              >
                {letter}
                {letter !== ' ' && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#d4af37] to-transparent transform scale-x-0 origin-left transition-transform duration-1000 delay-500 group-hover:scale-x-100"></span>
                )}
              </motion.span>
            ))}
          </motion.div>
          
          <motion.p 
            className="text-[#d4af37] text-xl md:text-2xl mb-12 italic"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
          >
           Bienvenue dans ce petit espace que j&apos;ai voulu créer pour toi.
          </motion.p>
          
          <motion.button
            className="px-10 py-4 border-2 border-[#d4af37] text-[#d4af37] hover:bg-[#d4af37] hover:text-[#0c1522] transition-all duration-500 tracking-wide uppercase text-sm relative overflow-hidden group"
            onClick={nextChapter}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">Découvrir ton cadeau</span>
            <span className="absolute inset-0 bg-[#d4af37] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-700"></span>
          </motion.button>
        </div>
        
        <motion.div 
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2 text-white/60 text-sm flex items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 1 }}
        >
          <span className="mr-2">Fais défiler pour explorer</span>
          <span className="animate-bounce">↓</span>
        </motion.div>
      </motion.div>
    );
  };

  // const ChapterOne = () => (
  //   <motion.div 
  //     className="h-screen flex flex-col items-center justify-center relative overflow-hidden"
  //     initial="initial"
  //     animate="animate"
  //     exit="exit"
  //     variants={pageVariants}
  //   >
  //     <div className="absolute inset-0 z-0">
  //       <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-[#0c1522]/90 z-10"></div>
  //       <div className="absolute inset-0 bg-cover bg-center z-0 filter brightness-75" 
  //         style={{ backgroundImage: "url('https://images.unsplash.com/photo-1478720568477-152d9b164e26?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80')" }}>
  //       </div>
  //       {/* Vignette effect */}
  //       <div className="absolute inset-0 bg-radial-vignette z-10"></div>
  //       {/* Grain effect */}
  //       <div className="absolute inset-0 opacity-30 z-10 bg-noise"></div>
  //     </div>
      
  //     <div className="z-20 text-center px-6 max-w-3xl">
  //       <motion.p 
  //         className="font-serif text-2xl md:text-4xl italic leading-relaxed"
  //         initial={{ opacity: 0, y: 20 }}
  //         animate={{ opacity: 1, y: 0 }}
  //         transition={{ duration: 1 }}
  //       >
  //         "En ce jour spécial, j'ai voulu te faire un hommage discret à ta lumiere et a la grace qui t accompagne."
  //       </motion.p>
        
  //       <motion.div 
  //         className="mt-12 flex flex-wrap justify-center gap-8"
  //         initial={{ opacity: 0 }}
  //         animate={{ opacity: 1 }}
  //         transition={{ delay: 0.5, duration: 1 }}
  //       >
  //         {/* Zone de placement pour photo avec effet cinématique */}
  //         <img src="1.jpeg" alt="Photo spéciale" className="w-full h-full object-cover" />
  //         <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#d4af37]/50 transition-all duration-700 scale-90 group-hover:scale-100 opacity-0 group-hover:opacity-100"></div>
  //         <motion.div 
  //           className="w-72 h-72 bg-black/40 backdrop-blur-sm border border-[#d4af37]/50 flex items-center justify-center group relative overflow-hidden"
  //           whileHover={{ scale: 1.05 }}
  //           transition={{ duration: 0.5 }}
  //         >
  //           <div className="absolute inset-0 bg-gradient-to-tr from-[#d4af37]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
  //           <p className="text-white/70 text-sm">Emplacement pour ta photo préférée</p>
  //           <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#d4af37]/50 transition-all duration-700 scale-90 group-hover:scale-100 opacity-0 group-hover:opacity-100"></div>
  //         </motion.div>
          
  //         <motion.div 
  //           className="w-72 p-6 bg-black/40 backdrop-blur-sm border border-[#d4af37]/50 flex flex-col justify-center relative overflow-hidden"
  //           whileHover={{ scale: 1.05 }}
  //           transition={{ duration: 0.5 }}
  //         >
  //           <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#d4af37] to-transparent"></div>
  //           <p className="text-white/90 text-lg italic">"{cinemaQuotes[0]}"</p>
  //           <p className="mt-4 text-[#d4af37]">— Pour ton anniversaire</p>
  //           <div className="absolute bottom-0 right-0 w-full h-1 bg-gradient-to-l from-[#d4af37] to-transparent"></div>
  //         </motion.div>
  //       </motion.div>
        
  //       <div className="mt-12 flex justify-center space-x-4">
  //         <motion.button
  //           className="px-8 py-3 border border-white/30 text-white/70 hover:bg-white/10 hover:text-white transition-all duration-300 tracking-wide uppercase text-sm"
  //           onClick={prevChapter}
  //           initial={{ opacity: 0, x: -20 }}
  //           animate={{ opacity: 1, x: 0 }}
  //           transition={{ delay: 1, duration: 0.5 }}
  //           whileHover={{ scale: 1.05 }}
  //           whileTap={{ scale: 0.95 }}
  //         >
  //           Retour
  //         </motion.button>
          
  //         <motion.button
  //           className="px-8 py-3 border-2 border-[#d4af37] text-[#d4af37] hover:bg-[#d4af37] hover:text-[#0c1522] transition-all duration-300 tracking-wide uppercase text-sm relative overflow-hidden group"
  //           onClick={nextChapter}
  //           initial={{ opacity: 0, x: 20 }}
  //           animate={{ opacity: 1, x: 0 }}
  //           transition={{ delay: 1, duration: 0.5 }}
  //           whileHover={{ scale: 1.05 }}
  //           whileTap={{ scale: 0.95 }}
  //         >
  //           <span className="relative z-10">Suite</span>
  //           <span className="absolute inset-0 bg-[#d4af37] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></span>
  //         </motion.button>
  //       </div>
  //     </div>
  //   </motion.div>
  // );
  
  const ChapterOne = () => (
    <motion.div 
      className="h-screen flex flex-col items-center justify-center relative overflow-hidden"
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-[#0c1522]/90 z-10"></div>
        <div className="absolute inset-0 bg-cover bg-center z-0 filter brightness-75" 
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1478720568477-152d9b164e26?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80')" }}>
        </div>
        {/* Vignette effect */}
        <div className="absolute inset-0 bg-radial-vignette z-10"></div>
        {/* Grain effect */}
        <div className="absolute inset-0 opacity-30 z-10 bg-noise"></div>
      </div>
      
      <div className="z-20 text-center px-6 max-w-3xl">
        <motion.p 
          className="font-serif text-2xl md:text-4xl italic leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          "En ce jour spécial, j'ai voulu te faire un hommage discret à ta lumière et à la grâce qui t'accompagne."
        </motion.p>
        
        <motion.div 
          className="mt-12 flex flex-wrap justify-center gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          {/* Zone de placement pour photo avec effet cinématique */}
          <motion.div 
            className="w-72 h-72 bg-black/40 backdrop-blur-sm border border-[#d4af37]/50 flex items-center justify-center group relative overflow-hidden"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5 }}
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-[#d4af37]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            <img src="1.jpeg" alt="Photo spéciale" className="w-full h-full object-cover" />
            <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#d4af37]/50 transition-all duration-700 scale-90 group-hover:scale-100 opacity-0 group-hover:opacity-100"></div>
          </motion.div>
          
          <motion.div 
            className="w-72 p-6 bg-black/40 backdrop-blur-sm border border-[#d4af37]/50 flex flex-col justify-center relative overflow-hidden"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5 }}
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#d4af37] to-transparent"></div>
            <p className="text-white/90 text-lg italic">"{cinemaQuotes[0]}"</p>
            <p className="mt-4 text-[#d4af37]">— Pour ton anniversaire</p>
            <div className="absolute bottom-0 right-0 w-full h-1 bg-gradient-to-l from-[#d4af37] to-transparent"></div>
          </motion.div>
        </motion.div>
        
        <div className="mt-12 flex justify-center space-x-4">
          <motion.button
            className="px-8 py-3 border border-white/30 text-white/70 hover:bg-white/10 hover:text-white transition-all duration-300 tracking-wide uppercase text-sm"
            onClick={prevChapter}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Retour
          </motion.button>
          
          <motion.button
            className="px-8 py-3 border-2 border-[#d4af37] text-[#d4af37] hover:bg-[#d4af37] hover:text-[#0c1522] transition-all duration-300 tracking-wide uppercase text-sm relative overflow-hidden group"
            onClick={nextChapter}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">Suite</span>
            <span className="absolute inset-0 bg-[#d4af37] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></span>
          </motion.button>
        </div>
      </div>
    </motion.div>
  );

  const ChapterTwo = () => (
    <motion.div 
      className="min-h-screen py-24 px-6 md:px-12 flex flex-col items-center justify-center bg-gradient-to-b from-[#051622] to-[#0a1f2d]"
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
    >
      <motion.h2 
        className="text-3xl md:text-5xl font-serif text-[#d4af37] mb-6 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Une galerie pour célébrer ton univers
      </motion.h2>
      
      {/* <motion.p 
        className="text-white/80 max-w-2xl text-center mb-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        Des espaces prêts à être remplis avec des moments qui te représentent. Comme un storyboard qui prend vie, ces cadres attendent tes photos et notre histoire à venir.
      </motion.p> */}
      
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl"
        variants={staggerContainer}
        initial="initial"
        animate="animate"
      >
        {photoSpots.map((spot, index) => (
          <motion.div 
            key={spot.id}
            className={`bg-[#0c1522] bg-opacity-80 backdrop-blur-md border border-[#d4af37]/20 p-6 rounded-lg hover:shadow-lg hover:shadow-[#d4af37]/10 transition-all duration-500 transform hover:-translate-y-2 relative overflow-hidden group`}
            variants={{
              initial: { opacity: 0, y: 50 },
              animate: { 
                opacity: 1, 
                y: 0, 
                transition: { 
                  duration: 0.6,
                  delay: index * 0.1
                }
              }
            }}
          >
            <div className={`absolute inset-0 opacity-20 bg-gradient-to-br ${spot.color} transition-opacity duration-500 group-hover:opacity-40`}></div>
            
            <h3 className="text-[#d4af37] text-xl font-serif mb-4 relative">{spot.title}</h3>
            
            {/* Zone de placement pour photo avec effet cinématique et support d'image */}
            <div className="w-full h-48 bg-black/50 mb-4 flex items-center justify-center group-hover:shadow-lg group-hover:shadow-[#d4af37]/5 transition-all duration-500 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#d4af37]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              
              {/* Image avec dimensions fixes */}
              {spot.imageUrl ? (
                <img 
                  src={spot.imageUrl} 
                  alt={`Photo ${spot.id}`} 
                  className="w-full h-full object-cover object-center"
                  onError={(e) => {
                    // @ts-ignore
                    e.target.style.display = 'none';
                    // @ts-ignore
                    e.target.nextElementSibling.style.display = 'block';
                  }}
                />
              ) : null}
              
              {/* Texte de placeholder qui s'affiche si pas d'image ou si l'image ne charge pas */}
              <p className={`text-white/50 text-sm ${spot.imageUrl ? 'hidden' : ''}`}>Photo #{spot.id}</p>
              
              <div className="absolute inset-0 border border-[#d4af37]/0 group-hover:border-[#d4af37]/30 transition-all duration-700"></div>
            </div>
            
            <p className="text-white/80 font-light leading-relaxed relative">{spot.message}</p>
            <div className="h-1 w-16 bg-gradient-to-r from-[#d4af37] to-transparent mt-4 group-hover:w-full transition-all duration-1000 ease-in-out"></div>
          </motion.div>
        ))}
      </motion.div>
      
      <div className="mt-16 flex justify-center space-x-4">
        <motion.button
          className="px-8 py-3 border border-white/30 text-white/70 hover:bg-white/10 hover:text-white transition-all duration-300 tracking-wide uppercase text-sm"
          onClick={prevChapter}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.2, duration: 0.5 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Retour
        </motion.button>
        
        <motion.button
          className="px-8 py-3 border-2 border-[#d4af37] text-[#d4af37] hover:bg-[#d4af37] hover:text-[#0c1522] transition-all duration-300 tracking-wide uppercase text-sm relative overflow-hidden group"
          onClick={nextChapter}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.2, duration: 0.5 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="relative z-10">Message final</span>
          <span className="absolute inset-0 bg-[#d4af37] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></span>
        </motion.button>
      </div>
    </motion.div>
  );

  const ChapterThree = () => (
    <motion.div 
      className="h-screen flex flex-col items-center justify-center relative overflow-hidden"
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-[#0c1522]/90 z-10"></div>
        <div className="absolute inset-0 bg-cover bg-center z-0 filter brightness-75" 
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1602137524201-700fd8180fc8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80')" }}>
        </div>
        {/* Particules d'or flottantes */}
        <div className="absolute inset-0 gold-particles z-5"></div>
        {/* Grain effect */}
        <div className="absolute inset-0 opacity-30 z-10 bg-noise"></div>
      </div>
      
      <div className="z-20 text-center px-6 max-w-3xl">
        <motion.h2 
          className="font-serif text-4xl md:text-6xl mb-6 leading-tight"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <span className="text-[#d4af37]">Joyeux</span> Anniversaire IVANA !
        </motion.h2>
        
        <motion.p 
          className="text-white/90 text-lg mb-12 max-w-xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Je ne te connais pas encore très bien.

Mais ce que j’ai vu, perçu, entendu,
m’a suffi pour vouloir créer quelque chose pour toi.

Je prie que Dieu continue de guider ton chemin,
d’inspirer tes projets,
et de poser sa main sur tout ce que tu construis.

Merci d’exister.
Merci d’être toi.

        </motion.p>
        
        {/* Zone pour une photo finale avec effet cinématique */}
        <motion.div 
          className="w-72 h-72 mx-auto mb-12 bg-black/40 backdrop-blur-sm border border-[#d4af37]/50 flex items-center justify-center group relative overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 1 }}
          whileHover={{ scale: 1.05 }}
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-[#d4af37]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
          
          {/* Image avec dimensions fixes */}
          <img 
            src="2.jpeg" 
            alt="Ivana" 
            className="w-64 h-64 object-cover object-center"
            onError={(e) => {
              // @ts-ignore
              e.target.style.display = 'none';
              // @ts-ignore
              document.getElementById('placeholder-text').style.display = 'block';
            }}
          />
          
          {/* Texte de placeholder qui s'affiche si l'image ne charge pas */}
          <p id="placeholder-text" className="text-white/70 text-sm hidden">Photo signature</p>
          
          <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#d4af37]/50 transition-all duration-700 scale-90 group-hover:scale-100 opacity-0 group-hover:opacity-100"></div>
          {/* Film strip effect */}
          <div className="absolute top-0 left-0 w-full h-4 bg-black flex justify-between px-2">
            {[...Array(10)].map((_, i) => (
              <div key={i} className="w-1 h-full bg-[#d4af37]/50"></div>
            ))}
          </div>
          <div className="absolute bottom-0 left-0 w-full h-4 bg-black flex justify-between px-2">
            {[...Array(10)].map((_, i) => (
              <div key={i} className="w-1 h-full bg-[#d4af37]/50"></div>
            ))}
          </div>
        </motion.div>
        
        <motion.div 
          className="relative group"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
        >
          <div className="flex justify-center space-x-4">
            <motion.button
              className="px-8 py-3 border border-white/30 text-white/70 hover:bg-white/10 hover:text-white transition-all duration-300 tracking-wide uppercase text-sm"
              onClick={prevChapter}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Retour
            </motion.button>
            
            <motion.button 
              className="px-10 py-4 border-2 border-[#d4af37] text-[#d4af37] hover:bg-[#d4af37] hover:text-[#0c1522] transition-all duration-500 tracking-wide uppercase text-sm relative overflow-hidden group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">Joyeux Anniversaire</span>
              <span className="absolute inset-0 bg-[#d4af37] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-700"></span>
            </motion.button>
          </div>
          <div className="absolute -inset-px border-2 border-[#d4af37]/50 animate-pulse rounded-sm"></div>
        </motion.div>
        
        <motion.div 
          className="mt-8 text-white/50 text-sm italic"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          <p>"{cinemaQuotes[2]}"</p>
        </motion.div>
      </div>
    </motion.div>
  );

  // Loading screen avec effet cinématographique
  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-[#0c1522] flex flex-col items-center justify-center">
        <div className="w-16 h-16 relative">
          <div className="w-full h-full border-4 border-[#d4af37]/20 border-t-[#d4af37] rounded-full animate-spin"></div>
        </div>
        <div className="text-[#d4af37] font-serif text-3xl mt-8 tracking-widest">
          {revealText ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              Création en cours<span className="animate-pulse">...</span>
            </motion.div>
          ) : null}
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#0c1522] min-h-screen text-white overflow-hidden">
      <Head>
        <title>Joyeux Anniversaire Cinématographique</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=Montserrat:wght@300;400;600&display=swap" rel="stylesheet" />
        <style jsx global>{`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          
          @keyframes float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
          }
          
          @keyframes pulse {
            0%, 100% { opacity: 1; transform: scale(1); }
            50% { opacity: .7; transform: scale(1.05); }
          }
          
          @keyframes shimmer {
            0% { background-position: -100% 0; }
            100% { background-position: 200% 0; }
          }
          
          .animate-shimmer {
            background: linear-gradient(90deg, transparent, rgba(212, 175, 55, 0.3), transparent);
            background-size: 200% 100%;
            animation: shimmer 2s infinite;
          }
          
          .bg-noise {
            background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
          }
          
          .bg-radial-vignette {
            background: radial-gradient(circle, transparent 30%, black 100%);
          }
          
          .gold-particles {
            background-image: url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='10' cy='10' r='1' fill='rgba(212, 175, 55, 0.3)'/%3E%3C/svg%3E");
            animation: float 3s ease-in-out infinite;
          }
          
          html {
            font-family: 'Montserrat', sans-serif;
            scroll-behavior: smooth;
          }
          
          h1, h2, h3, h4, h5, h6 {
            font-family: 'Playfair Display', serif;
          }
          
          ::-webkit-scrollbar {
            width: 8px;
          }
          
          ::-webkit-scrollbar-track {
            background: #0c1522;
          }
          
          ::-webkit-scrollbar-thumb {
            background: #d4af37;
            border-radius: 4px;
          }
          
          ::-webkit-scrollbar-thumb:hover {
            background: #b39429;
          }
        `}</style>
      </Head>

      {/* Navigation dots améliorée */}
      <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-50">
        {chapters.map((chapter) => (
          <div 
            key={chapter.id} 
            className={`w-3 h-3 my-4 rounded-full cursor-pointer transition-all duration-300 ${currentChapter === chapter.id ? 'bg-[#d4af37] scale-125' : 'bg-white bg-opacity-30'}`} 
            onClick={() => navigateTo(chapter.id)}
          />
        ))}
      </div>

      {/* Main Content */}
      {currentChapter === 0 && <ChapterHome />}
      {currentChapter === 1 && <ChapterOne />}
      {currentChapter === 2 && <ChapterTwo />}
      {currentChapter === 3 && <ChapterThree />}
    </div>
  );

}