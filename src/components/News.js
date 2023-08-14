import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  article = [
    {
      source: {
        id: "the-washington-post",
        name: "The Washington Post"
      },
      author: "Bryan Pietsch",
      title:
        "Ukraine live briefing: Russia says it foiled attack on Crimean Bridge; Ukraine reports slew of deadly strikes - The Washington Post",
      description:
        "Children were among civilians killed in a barrage of attacks on Saturday, Ukraine’s military said, without providing specifics.",
      url: "https://www.washingtonpost.com/world/2023/08/13/russia-ukraine-war-news/",
      urlToImage:
        "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/H4U4OJCWHNFB2VHHMHNYZJS6GI_size-normalized.jpg&w=1440",
      publishedAt: "2023-08-13T08:17:47Z",
      content:
        "The Russian Defense Ministry saidSaturdaythat its air defenses shot down at least two missiles fired at the Crimean Bridge and foiled a drone attack on the Crimean Peninsula. The bridge serves as the… [+3688 chars]"
    },
    {
      source: {
        id: "cnn",
        name: "CNN"
      },
      author: "Eve Brennan, Amarachi Orie",
      title: "Migrant boat sinks in English Channel, leaving 6 dead - CNN",
      description:
        "Six people died after a boat carrying migrants sank in the English Channel, authorities say, while two people could still be missing.",
      url: "https://www.cnn.com/2023/08/12/europe/migrant-boat-sinks-english-channel-intl/index.html",
      urlToImage:
        "https://media.cnn.com/api/v1/images/stellar/prod/230812075546-01-migrants-rescue-france.jpg?c=16x9&q=w_800,c_fill",
      publishedAt: "2023-08-13T07:05:00Z",
      content:
        "Six people died after a boat carrying migrants sank in the English Channel, authorities say, while two people could still be missing. \r\nAccording to testimonies of survivors, 65 or 66 people were on … [+2608 chars]"
    },
    {
      source: {
        id: null,
        name: "WRAL.com"
      },
      author: "Delaney Eyermann",
      title: "You can watch the Perseid meteor shower at its peak Saturday night at Dix Park - WRAL News",
      description:
        "2023 looks to be one of the best years for one of the best meteor showers with mostly clear skies and little to no moonlight to spoil the show",
      url:
        "https://www.wral.com/story/you-can-watch-the-perseid-meteor-shower-at-its-peak-saturday-night-at-dix-park/20995794/",
      urlToImage: "https://wwwcache.wral.com/asset/weather/2022/08/12/20414640/172522-tonyrice-DMID1-5vvdge44d-640x480.jpg",
      publishedAt: "2023-08-13T06:46:19Z",
      content:
        "The Perseid meteor shower will reach its peak Saturday and into the early morning hours of Sunday. Mostly clear skies are forecasted with clouds expected to continue decreasing throughout the night.\r… [+2427 chars]"
    },

    {
      source: {
        id: null,
        name: "The Indianapolis Star"
      },
      author: "Chris Sims, Evan Frank",
      title: "Powerball numbers 8/12/23: Results for $194M lottery drawing jackpot - IndyStar",
      description:
        "Here are the winning Powerball numbers and results for the $194 million lottery jackpot drawing on Saturday, Aug. 12, 2023.",
      url:
        "https://www.indystar.com/story/news/2023/08/12/powerball-numbers-august-12-2023-results-drawing-lottery-power-ball-lotto-jackpot-8-12-23/70574954007/",
      urlToImage:
        "https://www.indystar.com/gcdn/authoring/2016/01/13/NOKL/ghnewsok_gallery-OK-6033618-80317388.jpeg?crop=2485,1404,x0,y840&width=2485&height=1404&format=pjpg&auto=webp",
      publishedAt: "2023-08-13T04:15:22Z",
      content:
        "The Powerball lottery jackpot took another leap forward after no one matched all six numbers on Wednesday night.\r\nGrab your tickets and pull up a chair.\r\nHere are the numbers for the Saturday, Aug. 1… [+3832 chars]"
    },
    {
      source: {
        id: "cbs-news",
        name: "CBS News"
      },
      author: null,
      title: 'Death toll reaches 89 in Maui wildfires as Hawaii governor says focus is on "loss of life" - CBS News',
      description: "The newly released figure makes it the deadliest U.S. wildfire in over a century.",
      url: "https://www.cbsnews.com/news/hawaii-governor-focus-loss-of-life-maui-wildfires-lahaina/",
      urlToImage:
        "https://assets1.cbsnewsstatic.com/hub/i/r/2023/08/13/1f398643-5239-4678-b12e-1a5b0e1dd395/thumbnail/1200x630/94789c22f2c2febef08424e4531d083c/gettyimages-1592920564.jpg?v=08aa43fa812a9e12e93282c47f58b17f",
      publishedAt: "2023-08-13T04:03:00Z",
      content:
        "The raging wildfire that swept through the picturesque town of Lahaina on the Hawaiian island of Maui this week has killed at least 89 people, authorities said Saturday, making it the deadliest U.S. … [+6681 chars]"
    },
    {
      source: {
        id: "associated-press",
        name: "Associated Press"
      },
      author: "THOMAS BEAUMONT, HANNAH FINGERHUT",
      title:
        "Trump's Iowa state fair spectacle clouds DeSantis as former president is joined by Florida officials - The Associated Press",
      description:
        "Gone was the helicopter, but Donald Trump is renewing his reputation for defying norms and creating a mega-celebrity’s spectacle at the Iowa State Fair. In fewer than two hours Saturday on the steaming fairgrounds in Des Moines, Trump attracted thousands of s…",
      url: "https://apnews.com/article/trump-desantis-iowa-state-fair-caucus-reynolds-48b2f382e169ee1b9ae8c9d9dc19dedc",
      urlToImage:
        "https://dims.apnews.com/dims4/default/3ee44cf/2147483647/strip/true/crop/5816x3272+0+303/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F40%2Fb8%2F640916a69224d604fe90c3217fcc%2F9f3c70480f7147519925faedfc7a0ac0",
      publishedAt: "2023-08-13T04:02:00Z",
      content:
        "DES MOINES, Iowa (AP) Gone was the helicopter, but Donald Trump on Saturday renewed his reputation for defying norms and creating a mega-celebritys spectacle at the Iowa State Fair. \r\nTrump, in fewer… [+5377 chars]"
    }
  ];

  constructor(props) {
    super();
    console.log("ii anish");
    this.state = {
      articles: this.article,
      loading: false
    };
  }

  render(props) {
    return (
      <div className="container">
        <h2 className="center">News Monkey</h2>
        <div className="row">
          {this.state.articles.map(elements => {
            //   console.log(elements);
            return (
              <div className="col-md-3 my-4 ">
                <NewsItem
                  key={elements.url}
                  title={elements.title.slice(0, 45)}
                  description={elements.description.slice(0, 81)}
                  imageUrl={elements.urlToImage}
                  newsUrl={elements.url}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default News;
