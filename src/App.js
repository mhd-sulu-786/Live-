import React from 'react';
import { Grid, Card, CardHeader, CardContent, Typography } from '@mui/material';
import styled from 'styled-components';

const StyledCard = styled(Card)`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: transform 0.3s ease;
  &:hover {
    transform: scale(1.02);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  }
`;

const StyledCardContent = styled(CardContent)`
  flex: 1;
`;

const CategoryLink = styled.a`
  color: #1976d2;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

function App() {
  return (
    <div className="container">
      <h1 className="text-center">Welcome to My Multi-Category Website</h1>
      <Grid container spacing={2}>
        {/* Health and Wellness */}
        <Grid item xs={12} sm={4}>
          <StyledCard>
            <CardHeader title="Health and Wellness" />
            <StyledCardContent>
              <Typography variant="body2" color="textSecondary">
                <ul>
                  <li>
                    <CategoryLink href="https://www.mayoclinic.org/">Mayo Clinic</CategoryLink>
                    <p>Get expert advice on health and wellness from Mayo Clinic.</p>
                    <p>Find information on diseases, symptoms, and treatments.</p>
                  </li>
                  <li>
                    <CategoryLink href="https://www.healthline.com/">Healthline</CategoryLink>
                    <p>Stay informed about health and wellness with Healthline.</p>
                    <p>Get news, articles, and resources on healthy living.</p>
                  </li>
                  <li>
                    <CategoryLink href="https://www.cdc.gov/">CDC</CategoryLink>
                    <p>Get reliable information on diseases and health topics from CDC.</p>
                    <p>Find data, statistics, and resources for healthcare professionals.</p>
                  </li>
                  <li>
                    <CategoryLink href="https://www.who.int/">WHO</CategoryLink>
                    <p>Learn about global health issues and initiatives from WHO.</p>
                    <p>Get information on health topics, news, and events.</p>
                  </li>
                  <li>
                    <CategoryLink href="https://www.medlineplus.gov/">MedlinePlus</CategoryLink>
                    <p>Find trusted health information from MedlinePlus.</p>
                    <p>Get information on diseases, treatments, and healthy living.</p>
                  </li>
                </ul>
              </Typography>
            </StyledCardContent>
          </StyledCard>
        </Grid>

        {/* Personal Finance */}
        <Grid item xs={12} sm={4}>
          <StyledCard>
            <CardHeader title="Personal Finance" />
            <StyledCardContent>
              <Typography variant="body2" color="textSecondary">
                <ul>
                  <li>
                    <CategoryLink href="https://www.nerdwallet.com/">NerdWallet</CategoryLink>
                    <p>Manage your finances with NerdWallet's expert advice.</p>
                    <p>Get tools and resources for investing, saving, and more.</p>
                  </li>
                  <li>
                    <CategoryLink href="https://www.creditkarma.com/">Credit Karma</CategoryLink>
                    <p>Monitor your credit score and report with Credit Karma.</p>
                    <p>Get personalized recommendations for improving your credit.</p>
                  </li>
                  <li>
                    <CategoryLink href="https://www.bankrate.com/">Bankrate</CategoryLink>
                    <p>Compare rates and find deals on financial products with Bankrate.</p>
                    <p>Get news, advice, and tools for managing your finances.</p>
                  </li>
                  <li>
                    <CategoryLink href="https://www.kiplinger.com/">Kiplinger</CategoryLink>
                    <p>Get personal finance news, advice, and tools from Kiplinger.</p>
                    <p>Find information on investing, taxes, and retirement planning.</p>
                  </li>
                  <li>
                    <CategoryLink href="https://www.thebalance.com/">The Balance</CategoryLink>
                    <p>Learn about personal finance and money management with The Balance.</p>
                    <p>Get information on budgeting, saving, and investing.</p>
                  </li>
                </ul>
              </Typography>
            </StyledCardContent>
          </StyledCard>
        </Grid>

        {/* Technology and Gadgets */}
        <Grid item xs={12} sm={4}>
          <StyledCard>
            <CardHeader title="Technology and Gadgets" />
            <StyledCardContent>
              <Typography variant="body2" color="textSecondary">
                <ul>
                  <li>
                    <CategoryLink href="https://www.cnet.com/">CNET</CategoryLink>
                    <p>Stay up-to-date on the latest tech news and reviews with CNET.</p>
                    <p>Find information on gadgets, software, and technology trends.</p>
                  </li>
                  <li>
                    <CategoryLink href="https://www.wired.com/">Wired</CategoryLink>
                    <p>Explore the latest technology trends and innovations with Wired.</p>
                    <p>Get news, reviews, and in-depth analysis on tech topics.</p>
                  </li>
                  <li>
                    <CategoryLink href="https://www.techradar.com/">TechRadar</CategoryLink>
                    <p>Get the latest tech news, reviews, and deals with TechRadar.</p>
                    <p>Find information on gadgets, software, and technology trends.</p>
                  </li>
                  <li>
                    <CategoryLink href="https://www.engadget.com/">Engadget</CategoryLink>
                    <p>Stay informed about the latest tech news and trends with Engadget.</p>
                    <p>Get reviews, news, and analysis on gadgets and technology.</p>
                  </li>
                  <li>
                    <CategoryLink href="https://www.gizmodo.com/">Gizmodo</CategoryLink>
                    <p>Explore the latest technology trends and innovations with Gizmodo.</p>
                    <p>Get news, reviews, and in-depth analysis on tech topics.</p>
                  </li>
                </ul>
              </Typography>
            </StyledCardContent>
          </StyledCard>
        </Grid>

        {/* Travel and Adventure */}
        <Grid item xs={12} sm={4}>
          <StyledCard>
            <CardHeader title="Travel and Adventure" />
            <StyledCardContent>
              <Typography variant="body2" color="textSecondary">
                <ul>
                  <li>
                    <CategoryLink href="https://www.expedia.com/">Expedia</CategoryLink>
                    <p>Book your next trip with Expedia's travel deals and discounts.</p>
                    <p>Find flights, hotels, and packages for your dream vacation.</p>
                  </li>
                  <li>
                    <CategoryLink href="https://www.booking.com/">Booking.com</CategoryLink>
                    <p>Find and book your perfect hotel with Booking.com.</p>
                    <p>Get deals, discounts, and reviews for hotels worldwide.</p>
                  </li>
                  <li>
                    <CategoryLink href="https://www.tripadvisor.com/">TripAdvisor</CategoryLink>
                    <p>Plan your trip with TripAdvisor's travel reviews and ratings.</p>
                    <p>Find information on hotels, restaurants, and attractions.</p>
                  </li>
                  <li>
                    <CategoryLink href="https://www.lonelyplanet.com/">Lonely Planet</CategoryLink>
                    <p>Get travel guides, tips, and inspiration from Lonely Planet.</p>
                    <p>Find information on destinations, cultures, and travel styles.</p>
                  </li>
                  <li>
                    <CategoryLink href="https://www.travelandleisure.com/">Travel + Leisure</CategoryLink>
                    <p>Stay inspired with Travel + Leisure's travel news and guides.</p>
                    <p>Find information on destinations, hotels, and travel trends.</p>
                  </li>
                </ul>
              </Typography>
            </StyledCardContent>
          </StyledCard>
        </Grid>

        {/* Education and Learning */}
        <Grid item xs={12} sm={4}>
          <StyledCard>
            <CardHeader title="Education and Learning" />
            <StyledCardContent>
              <Typography variant="body2" color="textSecondary">
                <ul>
                  <li>
                    <CategoryLink href="https://www.coursera.org/">Coursera</CategoryLink>
                    <p>Take online courses and earn degrees with Coursera.</p>
                    <p>Find courses from top universities and institutions.</p>
                  </li>
                  <li>
                    <CategoryLink href="https://www.udemy.com/">Udemy</CategoryLink>
                    <p>Learn new skills and take online courses with Udemy.</p>
                    <p>Find courses on a wide range of topics, from tech to art.</p>
                  </li>
                  <li>
                    <CategoryLink href="https://www.edx.org/">edX</CategoryLink>
                    <p>Take online courses and earn certifications with edX.</p>
                    <p>Find courses from top universities and institutions.</p>
                  </li>
                  <li>
                    <CategoryLink href="https://www.khanacademy.org/">Khan Academy</CategoryLink>
                    <p>Learn for free about math, art, computer programming, economics, and more with Khan Academy.</p>
                    <p>Find courses, exercises, and resources on various subjects.</p>
                  </li>
                  <li>
                    <CategoryLink href="https://www.codecademy.com/">Codecademy</CategoryLink>
                    <p>Learn to code interactively with courses, projects, and quizzes from Codecademy.</p>
                    <p>Find courses on web development, data science, and more.</p>
                  </li>
                </ul>
              </Typography>
            </StyledCardContent>
          </StyledCard>
        </Grid>

        {/* Fashion and Style */}
        <Grid item xs={12} sm={4}>
          <StyledCard>
            <CardHeader title="Fashion and Style" />
            <StyledCardContent>
              <Typography variant="body2" color="textSecondary">
                <ul>
                  <li>
                    <CategoryLink href="https://www.vogue.com/">Vogue</CategoryLink>
                    <p>Stay updated on fashion trends, beauty tips, and celebrity style with Vogue.</p>
                    <p>Find runway coverage, fashion news, and style guides.</p>
                  </li>
                  <li>
                    <CategoryLink href="https://www.thecut.com/">The Cut</CategoryLink>
                    <p>Explore the latest fashion trends, beauty tips, and style advice with The Cut.</p>
                    <p>Find articles, reviews, and interviews on fashion and culture.</p>
                  </li>
                  <li>
                    <CategoryLink href="https://www.gq.com/">GQ</CategoryLink>
                    <p>Get men's fashion tips, style advice, and grooming guides with GQ.</p>
                    <p>Find fashion news, trends, and celebrity interviews.</p>
                  </li>
                  <li>
                    <CategoryLink href="https://www.refinery29.com/">Refinery29</CategoryLink>
                    <p>Explore fashion, beauty, and lifestyle trends with Refinery29.</p>
                    <p>Get news, articles, and videos on style and culture.</p>
                  </li>
                  <li>
                    <CategoryLink href="https://www.elle.com/">Elle</CategoryLink>
                    <p>Stay updated on fashion news, beauty trends, and celebrity style with Elle.</p>
                    <p>Find runway coverage, beauty product reviews, and style advice.</p>
                  </li>
                </ul>
              </Typography>
            </StyledCardContent>
          </StyledCard>
        </Grid>

        {/* Food and Cooking */}
        <Grid item xs={12} sm={4}>
          <StyledCard>
            <CardHeader title="Food and Cooking" />
            <StyledCardContent>
              <Typography variant="body2" color="textSecondary">
                <ul>
                  <li>
                    <CategoryLink href="https://www.allrecipes.com/">AllRecipes</CategoryLink>
                    <p>Find recipes, cooking tips, and meal inspiration with AllRecipes.</p>
                    <p>Get user-rated recipes and cooking advice.</p>
                  </li>
                  <li>
                    <CategoryLink href="https://www.foodnetwork.com/">Food Network</CategoryLink>
                    <p>Explore recipes, cooking videos, and culinary trends with Food Network.</p>
                    <p>Find chef recipes, tips, and food news.</p>
                  </li>
                  <li>
                    <CategoryLink href="https://www.bonappetit.com/">Bon Appétit</CategoryLink>
                    <p>Discover recipes, cooking tips, and food culture with Bon Appétit.</p>
                    <p>Find recipes, dining guides, and food trends.</p>
                  </li>
                  <li>
                    <CategoryLink href="https://www.epicurious.com/">Epicurious</CategoryLink>
                    <p>Explore recipes, cooking videos, and food inspiration with Epicurious.</p>
                    <p>Find user-rated recipes, cooking advice, and culinary tips.</p>
                  </li>
                  <li>
                    <CategoryLink href="https://www.delish.com/">Delish</CategoryLink>
                    <p>Find recipes, cooking tips, and entertaining ideas with Delish.</p>
                    <p>Get user-rated recipes, cooking advice, and food news.</p>
                  </li>
                </ul>
              </Typography>
            </StyledCardContent>
          </StyledCard>
        </Grid>

        {/* Arts and Entertainment */}
        <Grid item xs={12} sm={4}>
          <StyledCard>
            <CardHeader title="Arts and Entertainment" />
            <StyledCardContent>
              <Typography variant="body2" color="textSecondary">
                <ul>
                  <li>
                    <CategoryLink href="https://www.imdb.com/">IMDb</CategoryLink>
                    <p>Discover movies, TV shows, and celebrities with IMDb.</p>
                    <p>Get showtimes, watch trailers, and browse photo galleries.</p>
                  </li>
                  <li>
                    <CategoryLink href="https://www.metacritic.com/">Metacritic</CategoryLink>
                    <p>Explore reviews, ratings, and recommendations for movies, games, music, and more with Metacritic.</p>
                    <p>Find user reviews, critic reviews, and aggregated scores.</p>
                  </li>
                  <li>
                    <CategoryLink href="https://www.rottentomatoes.com/">Rotten Tomatoes</CategoryLink>
                    <p>Discover movies and TV shows with Rotten Tomatoes.</p>
                    <p>Get critic scores, audience scores, and reviews.</p>
                  </li>
                  <li>
                    <CategoryLink href="https://www.artstation.com/">ArtStation</CategoryLink>
                    <p>Explore digital art, designs, and illustrations with ArtStation.</p>
                    <p>Find artists, artwork, and inspiration.</p>
                  </li>
                  <li>
                    <CategoryLink href="https://www.deviantart.com/">DeviantArt</CategoryLink>
                    <p>Discover art, photography, and digital artwork with DeviantArt.</p>
                    <p>Find artists, galleries, and artistic inspiration.</p>
                  </li>
                </ul>
              </Typography>
            </StyledCardContent>
          </StyledCard>
        </Grid>

        {/* Sports and Fitness */}
        <Grid item xs={12} sm={4}>
          <StyledCard>
            <CardHeader title="Sports and Fitness" />
            <StyledCardContent>
              <Typography variant="body2" color="textSecondary">
                <ul>
                  <li>
                    <CategoryLink href="https://www.espn.com/">ESPN</CategoryLink>
                    <p>Stay updated on sports news, scores, and highlights with ESPN.</p>
                    <p>Get game results, player stats, and sports analysis.</p>
                  </li>
                  <li>
                    <CategoryLink href="https://www.sportingnews.com/">Sporting News</CategoryLink>
                    <p>Get the latest sports news, scores, and updates with Sporting News.</p>
                    <p>Find articles, analysis, and commentary on sports.</p>
                  </li>
                  <li>
                    <CategoryLink href="https://www.runnersworld.com/">Runner's World</CategoryLink>
                    <p>Discover running tips, training plans, and gear reviews with Runner's World.</p>
                    <p>Find articles, guides, and advice for runners.</p>
                  </li>
                  <li>
                    <CategoryLink href="https://www.menshealth.com/">Men's Health</CategoryLink>
                    <p>Get fitness tips, workout plans, and health advice with Men's Health.</p>
                    <p>Find articles, guides, and advice for men's fitness and health.</p>
                  </li>
                  <li>
                    <CategoryLink href="https://www.yogajournal.com/">Yoga Journal</CategoryLink>
                    <p>Discover yoga poses, sequences, and tips for yoga practice with Yoga Journal.</p>
                    <p>Find articles, videos, and resources for yoga practitioners.</p>
                  </li>
                </ul>
              </Typography>
            </StyledCardContent>
          </StyledCard>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
