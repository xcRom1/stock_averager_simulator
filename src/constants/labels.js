const labels = {
    EN: {
      title: '📉 Stock Averager Simulator',
      shares: 'Number of shares owned',
      avgPrice: 'Current average price',
      currentPrice: 'Current stock price',
      targetPrice: 'Target average price',
      calculate: 'Calculate',
      error: '❌ Check inputs (target price must be lower than current average).',
      success: (x, c, t, symbol) =>
        `✅ You need to buy approx. ${Math.ceil(x)} shares at ${c}${symbol} to reach an average of ${t}${symbol}.`,
      impossible: '❌ Not possible to reach this target price with these parameters.',
    },
    FR: {
      title: '📉 Simulateur de moyenne des actions',
      shares: 'Nombre d’actions possédées',
      avgPrice: 'Prix moyen actuel',
      currentPrice: 'Prix actuel de l’action',
      targetPrice: 'Prix moyen cible',
      calculate: 'Calculer',
      error: '❌ Vérifie les données (le prix cible doit être plus bas que le prix moyen actuel).',
      success: (x, c, t, symbol) =>
        `✅ Tu dois acheter environ ${Math.ceil(x)} actions à ${c}${symbol} pour atteindre un prix moyen de ${t}${symbol}.`,
      impossible: '❌ Impossible d\'atteindre ce prix cible avec ces paramètres.',
    },
  };
  
  export default labels;
  