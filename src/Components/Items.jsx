import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './style.css'
import FilterComponent from './FilterComponent';

// Import images
import CarrotJuice from "../assets/Juice/Carrot Juice.png";
import ChocolateCream from "../assets/Juice/Chocolate Cream Coconut.png";
import HoneyLime from "../assets/Juice/Honey Lime Tea.png";
import LemonTea from "../assets/Juice/Lemon Tea.png";
import LycheeTea from "../assets/Juice/Lychee Tea.png";
import PassionCream from "../assets/Juice/Passion Cream.png";
import PassionSoda from "../assets/Juice/Passion soda.png";
import RedAppleJuice from "../assets/Juice/Red apple Juice.png";
import WildberryRaspberryTea from "../assets/Juice/Wildberry Raspberry Tea.png";

// Import images from Coffee folder
import HotChocolateMilk from "../assets/Coffee/Hot Chocolate Milk.png";
import HotEspresso from "../assets/Coffee/Hot Espresso.png";
import IceAmericano from "../assets/Coffee/Ice Americano.jpg";
import IceCappuccino from "../assets/Coffee/Ice Cappuccino.png";
import IceLatte from "../assets/Coffee/Ice latte.png";
import IceThonlCoffee from "../assets/Coffee/Ice Thonl Coffee.png";
import IcedCappuccinoLumHery from "../assets/Coffee/Iced Cappuccino_Lum Hery.png";
import IcedCaramelMacchiato from "../assets/Coffee/Iced Caramel Macchiato.png";
import IcedChocoolate from "../assets/Coffee/Iced Chocoolate.png";


// Import images from Frozen Drinks folder
import BrownFrappeMilk from "../assets/Frozen Drinks/Brown Frappe(Milk).png";
import CaramelFrappe from "../assets/Frozen Drinks/Caramel Frappe.png";
import ChocolateFrappe from "../assets/Frozen Drinks/Chocolate Frappe.png";
import CreamTeaFreppe from "../assets/Frozen Drinks/Cream Tea Freppe.png";
import GatoVanilla from "../assets/Frozen Drinks/Gato Vanilla.png";
import MochaChipCream from "../assets/Frozen Drinks/Mocha Chip Cream.png";
import OreoGreenTea from "../assets/Frozen Drinks/Oreo Green Tea.png";
import PalmEspresso from "../assets/Frozen Drinks/Palm Espresso.png";
import SoyaVanillaStrawberryFrappe from "../assets/Frozen Drinks/Soya Vanilla Strawberry Frappe.png";

// Import images from Milk Tea folder
import ChocolateMilk from "../assets/Milk tea/Chocolate milk.png";
import GreenMilkTea from "../assets/Milk tea/Green Milk Tea.png";
import MilkTeaGrassJelly from "../assets/Milk tea/Milk Tea with Grass Jelly.png";
import MilkTea from "../assets/Milk tea/Milk Tea.png";
import MochaKrolok from "../assets/Milk tea/Mocha Krolok.png";
import RedMilkTea from "../assets/Milk tea/Red Milk Tea.png";

// Import images from Snacks folder
import BaconEggCheese from "../assets/Snacks/Bacon, Egg & Cheese.png";
import ChivesPocketPie from "../assets/Snacks/Chives Pocket Pie.png";
import Croissant from "../assets/Snacks/Croissant.png";
import Donuts from "../assets/Snacks/Donuts.png";
import HashBrowns from "../assets/Snacks/Hash Browns.png";
import Sandwich from "../assets/Snacks/Sandwich.png";
import StuffedBagelMinis from "../assets/Snacks/Stuffed Bagel Minis.png";
import './style.css';


export const menuItems = [
  { id:1, name: "Carrot Juice", category: "Juices", price: "$3.50", image: CarrotJuice },
  { id:2, name: "Chocolate Cream Coconut", category: "Juices", price: "$3.50", image: ChocolateCream },
  { id:3, name: "Honey Lime Tea", category: "Juices", price: "$3.50", image: HoneyLime },
  { id:4, name: "Lemon Tea", category: "Juices", price: "$3.50", image: LemonTea },
  { id:5,  name: "Lychee Tea", category: "Juices", price: "$3.50", image: LycheeTea },
  { id:6, name: "Passion Cream", category: "Juices", price: "$3.50", image: PassionCream },
  { id:7, name: "Passion Soda", category: "Juices", price: "$3.50", image: PassionSoda },
  { id:8, name: "Red Apple Juice", category: "Juices", price: "$3.50", image: RedAppleJuice },
  { id:9, name: "Wildberry Raspberry Tea", category: "Juices", price: "$3.50", image: WildberryRaspberryTea },
  { id:10, name: "Hot Chocolate Milk", category: "Coffee", price: "$3.50", image: HotChocolateMilk },
  { id:11, name: "Hot Espresso", category: "Coffee", price: "$3.50", image: HotEspresso },
  { id:12, name: "Ice Americano", category: "Coffee", price: "$3.50", image: IceAmericano },
  { id:13, name: "Ice Cappuccino", category: "Coffee", price: "$3.50", image: IceCappuccino },
  { id:14, name: "Ice Latte", category: "Coffee", price: "$3.50", image: IceLatte },
  { id:15, name: "Ice Thonl Coffee", category: "Coffee", price: "$3.50", image: IceThonlCoffee },
  { id:16, name: "Iced Cappuccino Lum Hery", category: "Coffee", price: "$3.50", image: IcedCappuccinoLumHery },
  { id:17, name: "Iced Caramel Macchiato", category: "Coffee", price: "$3.50", image: IcedCaramelMacchiato },
  { id:18, name: "Iced Chocoolate", category: "Coffee", price: "$3.50", image: IcedChocoolate },
  { id:19, name: "Brown Frappe(Milk)", category: "Frozen Drinks", price: "$3.50", image: BrownFrappeMilk },
  { id:20, name: "Caramel Frappe", category: "Frozen Drinks", price: "$3.50", image: CaramelFrappe },
  { id:21, name: "Chocolate Frappe", category: "Frozen Drinks", price: "$3.50", image: ChocolateFrappe },
  { id:22, name: "Cream Tea Freppe", category: "Frozen Drinks", price: "$3.50", image: CreamTeaFreppe },
  { id:23, name: "Gato Vanilla", category: "Frozen Drinks", price: "$3.50", image: GatoVanilla },
  { id:24, name: "Mocha Chip Cream", category: "Frozen Drinks", price: "$3.50", image: MochaChipCream },
  { id:25, name: "Oreo Green Tea", category: "Frozen Drinks", price: "$3.50", image: OreoGreenTea },
  { id:26, name: "Palm Espresso", category: "Frozen Drinks", price: "$3.50", image: PalmEspresso },
  { id:27, name: "Soya Vanilla Strawberry Frappe", category: "Frozen Drinks", price: "$3.50", image: SoyaVanillaStrawberryFrappe },
  { id:28, name: "Chocolate milk", category: "Milk Tea", price: "$3.50", image: ChocolateMilk },
  { id:29, name: "Green Milk Tea", category: "Milk Tea", price: "$3.50", image: GreenMilkTea },
  { id:30, name: "Chocolate milk", category: "Milk Tea", price: "$3.50", image: ChocolateMilk },
  { id:31, name: "Milk Tea with Grass Jelly", category: "Milk Tea", price: "$3.50", image: MilkTeaGrassJelly },
  { id:32, name: "Milk Tea", category: "Milk Tea", price: "$3.50", image: MilkTea },
  { id:33, name: "Mocha Krolok", category: "Milk Tea", price: "$3.50", image: MochaKrolok },
  { id:34, name: "Red Milk Tea", category: "Milk Tea", price: "$3.50", image: RedMilkTea },
  { id:35, name: "Bacon, Egg & Cheese", category: "Snacks", price: "$3.50", image: BaconEggCheese },
  { id:36, name: "Chives Pocket Pie", category: "Snacks", price: "$3.50", image: ChivesPocketPie },
  { id:37, name: "Croissant", category: "Snacks", price: "$3.50", image: Croissant },
  { id:38, name: "Donuts", category: "Snacks", price: "$3.50", image: Donuts },
  { id:39, name: "Hash Browns", category: "Snacks", price: "$3.50", image: HashBrowns },
  { id:40, name: "Sandwich", category: "Snacks", price: "$3.50", image: Sandwich },
  { id:41, name: "Stuffed Bagel Minis", category: "Snacks", price: "$3.50", image: StuffedBagelMinis },
];