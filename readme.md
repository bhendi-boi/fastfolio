# Fastfolio

A quicker and reliable way to create your portfolio website to showcase your work.

## Tech Stack

- **React** + Vite
- **Tailwind CSS**
- **Framer Motion**

## 🔑 Features

- Modern stack
- Intuitive to use
- Scores 100% in _web accessibility_ and _performance_
- Easy to _customize_
- Very _less_ bundle size (around 260 KB of js and 19 KB of css)
- Out of the box support for _dark mode_

## 🤔 How to use ?

Fastfolio provides you the ability to easily customize your personal portfolio. Follow along to find out how to use Fastfolio.

## Requirements

- Node v18.x

### Setup

1. Fork this repositoy. Dont know how to fork a repositoy ? Find out [here](https://docs.github.com/en/get-started/quickstart/fork-a-repo).

2. Clone the fork to your machine.

3. Run `npm install` and finally `npm run dev` to start the dev server.

### Adding your details

1. Open `index.html` and you will find some lines with comments `<!-- Changes should be made here -->`. You will find some strings which have `<yourname>` or `<your>` in between. Add your details there.

2. Now open the `constants.jsx` file which is present in `src` folder. You will find bunch of variables being exported. Fill them with your details. You can add your resume / cv as pdf in `public` folder and fill the `assetSrc` variable with approproate path.

3. Head over to `About.jsx` file in `src` folder. You will find a `motion.ul` in it. Add the tools and frameworks you use here. I have added 3 tools which are common for every developer. To add your own items go to [react icons](https://react-icons.github.io/react-icons) website. Search for the icon you need and once you find the icon you are looking for copy on of the `motion.li` and swap the icons. If you are unable to find the icon you are looking for on react-icons website, you can download svg for that tool into `assets` folder.

4. Now open the `Projects.jsx` file which is present in `assets` folder. You will find an array of objects being exported there. Think of this as a database of your website. Each object represent a project of yours. We recommend you to use images in `webp` format because they take less time to load. Use [this](https://www.freeconvert.com/jpg-to-webp) online tool to convert your jpg images to webp. You can follow the examples given in the file to fill your details.

| **key**   | **value**                                                                                               |
| --------- | ------------------------------------------------------------------------------------------------------- |
| title     | title of your project                                                                                   |
| stack     | an array of string representing the tech stack you used                                                 |
| details   | a brief description of the project                                                                      |
| url       | url of the project. If your project doesnot have a url set this key as null                             |
| imageURL  | add path to the image here for eg if the image filename is "one.webp" add "./one.webp"                  |
| githubURL | url of the github repo of your project. If your project doesnot have a github repo set this key as null |

5. Now this is the final step. Open `TimeLine.jsx` file in `assets` folder. This is similar to `Projects.jsx` file discussed above. This file exports an array of objects and each object represent your work positions. You can follow the examples given in file to fill your details.

| key     | value                                                                                                                                             |
| ------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| title   | title of your position                                                                                                                            |
| start   | year in which you have started at that position. You can also pass strings like "Feb 2023" if you want                                            |
| end     | year till which you worked in a particular position. If you are still working in a position set this key as null                                  |
| details | a brief description of your work at that position. It has to be a ReactNode. If you want to use links in between use the TeritiaryLink component. |

**TeritiaryLink** is just a styled `a` tag. Donot forget to pass a href to it.

Ex:

```jsx
<TeritiaryLink href={githubProfile}>Github</TeritiaryLink>
```

At this point of time if you open you browser and visit `localhost:5173` you will see the preview of your portfolio. Make sure that everything looks fine.

Don't like the colors and fonts being used? Feel free to customize them by opening `tailwind.config.cjs` file.
We recommend to stick with the default color palette of tailwind. You can find it [here](https://tailwindcss.com/docs/customizing-colors#default-color-palette).

#### Note

- The color palette is choosen with great caution so that it is accessibile for everyone. if you choose to change the color palette don't forget to audit your site for web accessibility before deploying.
- colors with `dark-` prefix are used when dark mode is turned on.
- colors with `bg-` prefix are background colors.
- If you are changing a font don't forget to add link to it in `index.html` or `index.css` files.

## 🚀 Deploying your website

After you have finished all the above steps commit all the changes and head over to [vercel.com](https://vercel.com/). Create an account if you don't have one. Open dashboard and click on add new and choose project in the dropdown shown. Give access to your github repo and choose the default settings for configure project and hit deploy. That's it folks. You have successfully created a portfolio to showcase your work.

Found this useful ? give it ⭐ on github.

Found any bug ? Raise an issue [here](https://github.com/bhendi-boi/fastfolio/issues).
