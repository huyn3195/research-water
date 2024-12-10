import Navbar from "@/components/Navbar";

export default function Advanced() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-r from-green-50 to-green-200">
      <Navbar />
      <div className="flex flex-col items-start justify-start flex-grow p-8">
        <h1 className="text-4xl font-semibold text-left text-green-800">
          Phase 2 Advanced Analysis
        </h1>
        <p className="text-lg text-gray-700 text-left mt-4">
          The first three visualizations concern just Catholic Benchmark
          Institutions, observing where St. Thomas lies on density plots of the
          three percentage reduction variables of interest. Through visual
          inspection, we can determine where St. Thomas' OP 21 performance lies
          on the distribution of Catholic Benchmark Institutions.
        </p>

        <div className="mt-8 text-lg text-gray-700">
          {/* Code block */}
          <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
            <code className="text-sm">{`universities_of_interest <- c(
  "Creighton University",
  "Gonzaga University",
  "Loyola University Chicago",
  "Loyola Marymount University",
  "Santa Clara University",
  "Seattle University",
  "University of Dayton",
  "University of Notre Dame",
  "University of San Diego",
  "Villanova University",
  "University of St. Thomas"
)

catholic_unis <- clean1 %>%
  filter(institution %in% universities_of_interest)`}</code>
          </pre>

          <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
            <code className="text-sm">{`ggplot(data = clean2, aes(x = percentage_reduction_in_potable_water_use_per_weighted_campus_user_from_baseline, color = risk_group)) +
  geom_density(size = 1.5) +
  scale_color_manual(
    values = c('1 (Low and Low to Medium)' = 'darkgreen', '3 (High and Extremely High)' = 'red'),
    breaks = c('1 (Low and Low to Medium)', '3 (High and Extremely High)'), 
    labels = c('Low and Low to Medium', 'High and Extremely High')
  ) +
  labs(
    color = "Physical Risk Group",
    x = "Reduction in Potable Water Use per Weighted Campus User (%)",
    y = "Density",
    title = "Reduction in Potable Water Use per Weighted Campus User by Physical 
    Risk Group"
  ) +
  scale_x_continuous(labels = scales::percent) +
  geom_vline(xintercept = -0.010209659, linetype = "dashed", color = "red", size = 1) +
  annotate("text", x = -0.010209659, y = 0.5, label = "St. Thomas", 
           color = "purple", vjust = -0.5, hjust = 1.1, size = 3) +
  theme(
    plot.title = element_text(size = 10, face = "bold", hjust = 0.5, margin = margin(b = 20)),
    axis.title.y = element_text(size = 8, face = "bold", margin = margin(r = 20)),  
    axis.title.x = element_text(size = 8, face = "bold", margin = margin(t = 10)),
    
    legend.position = "bottom",
    
    legend.text = element_text(size = 8, face = "bold"),
    legend.title = element_text(size = 10, face = "bold"),
    
    legend.title.align = 0.5
  )`}</code>
          </pre>
          <div className="mt-6 mb-6">
            <img
              src="/screenshots/pic11.png" // Absolute path to the screenshot
              alt="Summary Statistics Screenshot"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
          <p>
            In this data visualization, we are looking at a density chart that
            displays the frequency of institutions and their percentage
            reduction in potable water use per weighted campus user. We split up
            our institutions into two groups, one group of the institutions with
            the lower half of the physical risk quantity, and the other group is
            the institutions with the upper half of the physical risk quantity.
            These two groups are indicated by the red (high risk) and green (low
            risk) lines along the chart. The the vertical dashed line represents
            where the University of St. Thomas sits on the distribution for high
            risk institutions. It is colored red to represent the distribution
            it corresponds with. In this visualization it is important to note
            that St. Thomas has actually increased potable water use per
            weighted campus user since their baseline year. This is something
            that we could focus on improving in the coming years.
          </p>
          <pre
            className="bg-gray-100 p-4 rounded-lg overflow-x-auto mt-6"
            style={{ maxWidth: "80vw", margin: "0 auto" }}
          >
            <code className="text-sm">{`clean2 <- clean2 |>
  mutate(
  percentage_reduction_in_potable_water_use_per_unit_of_floor_area_from_baseline = ((potable_water_use_per_unit_of_floor_area_baseline_year - potable_water_use_per_unit_of_floor_area_performance_year)/potable_water_use_per_unit_of_floor_area_baseline_year))

ggplot(data = clean2, aes(x = percentage_reduction_in_potable_water_use_per_unit_of_floor_area_from_baseline, color = risk_group)) +
  geom_density(size = 1.5) +
  scale_color_manual(
    values = c('1 (Low and Low to Medium)' = 'darkgreen', '3 (High and Extremely High)' = 'red'),
    breaks = c('1 (Low and Low to Medium)', '3 (High and Extremely High)'), 
    labels = c('Low and Low to Medium', 'High and Extremely High')
  ) +
  labs(
    color = "Physical Risk Group",
    x = "Reduction in Potable Water Use per Unit of Floor Area (%)",
    y = "Density",
    title = "Reduction in Potable Water Use per Unit of Floor Area by Physical 
    Risk Group"
  ) +
  scale_x_continuous(labels = scales::percent) +
  geom_vline(xintercept = 0.2120922, linetype = "dashed", color = "red", size = 1) +
  annotate("text", x = 0.2120922, y = 0.5, label = "St. Thomas", 
           color = "purple", vjust = -0.5, hjust = -.15, size = 3) +
  theme(
    plot.title = element_text(size = 10, face = "bold", hjust = 0.5, margin = margin(b = 20)),
    axis.title.y = element_text(size = 8, face = "bold", margin = margin(r = 20)),  
    axis.title.x = element_text(size = 8, face = "bold", margin = margin(t = 10)),
    
    legend.position = "bottom",
    
    legend.text = element_text(size = 8, face = "bold"),
    legend.title = element_text(size = 10, face = "bold"),
    
    legend.title.align = 0.5
  )`}</code>
          </pre>

          <div className="mt-6 mb-6">
            <img
              src="/screenshots/pic12.png" // Absolute path to the screenshot
              alt="Summary Statistics Screenshot"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
          <p>
            In this data visualization, we are looking at a density chart that
            displays the frequency of institutions and their percentage
            reduction in potable water use per unit of floor area. We split up
            our institutions into two groups, one group of the institutions with
            the lower half of the physical risk quantity, and the other group is
            the institutions with the upper half of the physical risk quantity.
            These two groups are indicated by the red (high risk) and green (low
            risk) lines along the chart. The vertical dashed line represents
            where the University of St. Thomas sits on the distribution for high
            risk institutions. It is colored red to represent the distribution
            it corresponds with. We can see that there are multiple institutions
            that have increased their water use in this area because they have
            negative reduction percentages. However, St. Thomas has reduced
            their water use by 21% which is a substantial decrease. St. Thomas
            is a bit behind other schools in their group, so this is something
            that could be improved in the future, but it is still a positive.
          </p>
          <pre
            className="bg-gray-100 p-4 rounded-lg overflow-x-auto mt-6"
            style={{ maxWidth: "80vw", margin: "0 auto" }}
          >
            <code className="text-sm">{`ggplot(data = clean2, aes(x = percentage_reduction_in_total_water_withdrawal_per_unit_of_vegetated_grounds_from_baseline, color = risk_group)) +
  geom_density(size = 1.5) +
  scale_color_manual(
    values = c('1 (Low and Low to Medium)' = 'darkgreen', '3 (High and Extremely High)' = 'red'),
    breaks = c('1 (Low and Low to Medium)', '3 (High and Extremely High)'), 
    labels = c('Low and Low to Medium', 'High and Extremely High')
  ) +
  labs(
    color = "Physical Risk Group",
    x = "Reduction in Total Water Withdrawal per Unit of Vegetated Grounds (%)",
    y = "Density",
    title = "Reduction in Total Water Withdrawal per Unit of Vegetated Grounds by Physical Risk Group"
  ) +
  scale_x_continuous(labels = scales::percent_format(scale = 1)) +
  geom_vline(xintercept = 8.473044, linetype = "dashed", color = "red", size = 1) +
  annotate("text", x = 8.473044, y = 0.0005, label = "St. Thomas", 
           color = "purple", vjust = -0.5, hjust = -.15, size = 3) +
  theme(
    plot.title = element_text(size = 10, face = "bold", hjust = 0.5, margin = margin(b = 20)),
    axis.title.y = element_text(size = 8, face = "bold", margin = margin(r = 20)),  
    axis.title.x = element_text(size = 8, face = "bold", margin = margin(t = 10)),
    
    legend.position = "bottom",
    
    legend.text = element_text(size = 8, face = "bold"),
    legend.title = element_text(size = 10, face = "bold"),
    
    legend.title.align = 0.5
  )`}</code>
          </pre>
          <div className="mt-6 mb-6">
            <img
              src="/screenshots/pic13.png" // Absolute path to the screenshot
              alt="Summary Statistics Screenshot"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
          <p>
            In this data visualization, we are looking at a density chart that
            displays the frequency of institutions and their percentage
            reduction in potable water use per unit of vegetated grounds. We
            split up our institutions into two groups, one group of the
            institutions with the lower half of the physical risk quantity, and
            the other group is the institutions with the upper half of the
            physical risk quantity. These two groups are indicated by the red
            (high risk) and green (low risk) lines along the chart. The the
            vertical dashed line represents where the University of St. Thomas
            sits on the distribution for high risk institutions. It is colored
            red to represent the distribution it corresponds with. We can see
            that some schools have increased their water use in this area.
            However, St. Thomas has reduced their water use. This is on par with
            the majority of the rest of the institutions in their group (high
            and extremely high risk). St. Thomas has only reduced their water
            use by 8%, so this is something that could be improved in the
            future, however it is still a positive. Further exploration of the
            three percentage variables was warranted, using scatter plots and
            linear regression to create lines of best fit, understanding St.
            Thomas' OP-21 performance (in both institution groups) through
            visual and quantifiable means, respectively. To begin, institution
            names were shortened to create more space on the charts.
          </p>
          <pre
            className="bg-gray-100 p-4 rounded-lg overflow-x-auto mt-6"
            style={{ maxWidth: "80vw", margin: "0 auto" }}
          >
            <code className="text-sm">{`clean3 <- clean2 |>
  mutate(
    institution = case_when(
      institution == "Creighton University" ~ "Creighton",
      institution == "Gonzaga University" ~ "Gonzaga",
      institution == "Loyola University Chicago" ~ "Loyola Chicago",
      institution == "Loyola Marymount University" ~ "Loyola Marymount",
      institution == "Santa Clara University" ~ "Santa Clara",
      institution == "Seattle University" ~ "Seattle",
      institution == "University of Dayton" ~ "Dayton",
      institution == "University of Notre Dame" ~ "Notre Dame",
      institution == "University of San Diego" ~ "San Diego",
      institution == "Villanova University" ~ "Villanova",
      institution == "University of St. Thomas" ~ "St. Thomas",
      institution == "Bemidji State University" ~ "Bemidji",
      institution == "Carleton College" ~ "Carleton MN",
      institution == "College of Saint Benedict" ~ "St. Ben's",
      institution == "St. John’s University" ~ "St. John's",
      institution == "Concordia College - Moorhead" ~ "Concordia Moorhead",
      institution == "Macalester College" ~ "Macalester",
      institution == "Winona State University" ~ "Winona",
      institution == "University of Minnesota, Twin Cities" ~ "UMN",
      institution == "University of Minnesota, Morris" ~ "UMN-Morris",
      institution == "University of Minnesota, Duluth" ~ "UMD",
      institution == "Augsburg University" ~ "Augsburg",
      institution == "Concordia in St. Paul" ~ "Concordia St. Paul",
      institution == "Hamline University" ~ "Hamline",
      institution == "St. Kate’s University" ~ "St. Kate's",
      institution == "St. Olaf College" ~ "St. Olaf",
      TRUE ~ institution,
    ),
    percentage_reduction_in_potable_water_use_per_weighted_campus_user_from_baseline = percentage_reduction_in_potable_water_use_per_weighted_campus_user_from_baseline*100,
    percentage_reduction_in_potable_water_use_per_unit_of_floor_area_from_baseline = percentage_reduction_in_potable_water_use_per_unit_of_floor_area_from_baseline * 100)`}</code>
          </pre>
          <pre
            className="bg-gray-100 p-4 rounded-lg overflow-x-auto mt-6"
            style={{ maxWidth: "80vw", margin: "0 auto" }}
          >
            <code className="text-sm">{`library(ggrepel)

lm_model1 <- lm(op_21_percent ~ percentage_reduction_in_potable_water_use_per_weighted_campus_user_from_baseline, data = clean3)

coefficients <- coef(lm_model1)
intercept <- coefficients[1]
slope <- coefficients[2]

cat("Equation of the line: y =", round(intercept, 2), "+", round(slope, 2), "* x\\n")`}</code>
          </pre>

          <p>Equation of the line: y = 0.37 + 0.01 * x</p>
          <pre
            className="bg-gray-100 p-4 rounded-lg overflow-x-auto mt-6"
            style={{ maxWidth: "80vw", margin: "0 auto" }}
          >
            <code className="text-sm">{`clean3 |>
  ggplot(aes(
    y = op_21_percent,
    x = percentage_reduction_in_potable_water_use_per_weighted_campus_user_from_baseline
  )) +
  geom_point(aes(color = risk_group)) +
  geom_smooth(method = "lm", se = FALSE, color = scales::alpha("black", 0.4), linetype = "dashed") +  
  geom_text_repel(aes(
    label = institution,
    fontface = ifelse(institution == "St. Thomas", "bold", "plain")
  ),
  size = 3,
  color = ifelse(clean3$institution == "St. Thomas", "purple", "gray20")) +
  labs(
    title = "Water Use Score by Reduction in Potable Water Use per Person",
    x = "Reduction in Potable Water Use Per Person (percentage)",
    y = "Water Use Score (%)",
    color = "Physical Risk Quantity"
  ) +
  scale_color_manual(values = c("darkgreen", "#CD9600", "red", "gray20"), 
  labels = c("Low/Low to Medium", "Medium/High", "High/Extremely High")) +
  theme_minimal() +
  theme(
    plot.title = element_text(size = 10, face = "bold", hjust = 0.5, margin = margin(b = 20)),
    axis.title.y = element_text(size = 8, face = "bold", margin = margin(r = 20)),  
    axis.title.x = element_text(size = 8, face = "bold", margin = margin(t = 10)),
    
    legend.position = "bottom",
    
    legend.text = element_text(size = 8, face = "bold"),
    legend.title = element_text(size = 10, face = "bold"),
    
    legend.title.align = 0.5
  )`}</code>
          </pre>
          <div className="mt-6 mb-6">
            <img
              src="/screenshots/pic14.png" // Absolute path to the screenshot
              alt="Summary Statistics Screenshot"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
          <pre
            className="bg-gray-100 p-4 rounded-lg overflow-x-auto mt-6"
            style={{ maxWidth: "80vw", margin: "0 auto" }}
          >
            <code className="text-sm">{`summary(lm_model1)`}</code>
          </pre>
          <div className="mt-6 mb-6">
            <img
              src="/screenshots/pic15.png" // Absolute path to the screenshot
              alt="Summary Statistics Screenshot"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>

          <p>
            The first scatter plot graphs a school’s OP 21 score (as a percent
            for easier comparison acrossphysical risk quantities) against their
            percentage reduction in potable water use per person. Asseen in the
            chart, St. Thomas’ percentage reduction lags behind most of the
            schools. The lineof best fit has the equationy= 0.0117x + 0.3741,
            indicating that for a 1 unit increase in thepercentage reduction in
            potable water use per person, the model predicts an increase of
            0.0117 inthe water use score percent (with both coeﬀicients of the
            equation being statistically significant).The adjusted r-squared
            value of 0.8529 indicates a strong positive correlation between the
            x and yvariables such that 85.29% of the variability in the water
            use score (as a percent) is explained bythe model using percentage
            reduction in potable water use per person as a predictor.This model
            suggests that St. Thomas stands to gain from investing resources in
            further reductionof potable water use per person, as other
            institutions in the two groups were awarded higher scores with
            greater reduction
          </p>
          <pre
            className="bg-gray-100 p-4 rounded-lg overflow-x-auto mt-6"
            style={{ maxWidth: "80vw", margin: "0 auto" }}
          >
            <code className="text-sm">{`clean3_nooutliers <- clean3 |>
  filter(institution != "UMN")

lm_model2 <- lm(op_21_percent ~ percentage_reduction_in_potable_water_use_per_unit_of_floor_area_from_baseline, data = clean3_nooutliers)

coefficients <- coef(lm_model2)
intercept <- coefficients[1]
slope <- coefficients[2]

cat("Equation of the line: y =", round(intercept, 2), "+", round(slope, 2), "* x\\n")`}</code>
          </pre>
          <p>Equation of the line: y = 0.22 + 0.01 * x</p>
          <pre
            className="bg-gray-100 p-4 rounded-lg overflow-x-auto mt-6"
            style={{ maxWidth: "80vw", margin: "0 auto" }}
          >
            <code className="text-sm">{`clean3_nooutliers |>
ggplot(aes(y=op_21_percent, x=percentage_reduction_in_potable_water_use_per_unit_of_floor_area_from_baseline)) +
  geom_point(aes(color = risk_group)) +
  geom_smooth(method = "lm", se = FALSE, color = scales::alpha("black", 0.4), linetype = "dashed") +  
  geom_text_repel(aes(
    label = institution,
    fontface = ifelse(institution == "St. Thomas", "bold", "plain")
  ),
  size = 3,
  color = ifelse(clean3_nooutliers$institution == "St. Thomas", "purple", "gray20")) +
  labs(
    title = "Water Use Score by Reduction in Potable Water Use per Square Foot of Floor Area",
    x = "Reduction in Potable Water Use Per Square Foot of Floor Area (percentage)",
    y = "Water Use Score (%)",
    color = "Physical Risk Quantity"
  ) +
  scale_color_manual(values = c("darkgreen", "#CD9600", "red", "gray20"), 
  labels = c("Low/Low to Medium", "Medium/High", "High/Extremely High")) +
  theme_minimal() + 
  theme(
    plot.title = element_text(size = 10, face = "bold", hjust = 0.5, margin = margin(b = 20)),
    axis.title.y = element_text(size = 8, face = "bold", margin = margin(r = 20)),  
    axis.title.x = element_text(size = 8, face = "bold", margin = margin(t = 10)),
    
    legend.position = "bottom",
    
    legend.text = element_text(size = 8, face = "bold"),
    legend.title = element_text(size = 10, face = "bold"),
    
    legend.title.align = 0.5
  ) `}</code>
          </pre>
          <div className="mt-6 mb-6">
            <img
              src="/screenshots/pic17.png" // Absolute path to the screenshot
              alt="Summary Statistics Screenshot"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
          <pre
            className="bg-gray-100 p-4 rounded-lg overflow-x-auto mt-6"
            style={{ maxWidth: "80vw", margin: "0 auto" }}
          >
            <code className="text-sm">{`summary(lm_model2)`}</code>
          </pre>
          <div className="mt-6 mb-6">
            <img
              src="/screenshots/pic18.png" // Absolute path to the screenshot
              alt="Summary Statistics Screenshot"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>

          <p>
            The next scatter plot graphs a school’s OP 21 score against their
            percentage reduction in potablewater use per square foot of floor
            area. Once again, St. Thomas’ percentage reduction lags behindmost
            of the schools. The line of best fit has the equationy= 0.0121x +
            0.2155, indicating thatfor a 1 unit increase in the percentage
            reduction in potable water use per square foot of floor area,the
            model predicts an increase of 0.0123 in the water use score percent
            (with both coeﬀicients of theequation being statistically
            significant). The adjusted r-squared value of 0.6717 indicates a
            strongpositive correlation between the x and y variables such that
            67.17% of the variability in the wateruse score (as a percent) is
            explained by the model using percentage reduction in potable water
            useper square foot of floor area as a predictor.This model suggests
            that St. Thomas stands to gain from investing resources in further
            reduction ofpotable water use per square foot of floor area, as
            other institutions in the two groups were alwaysawarded higher
            scores with greater reduction (however, it should be noted that
            schools also receivedhigher scores with less reduction). Although
            the slope of this equation is slightly greater than theprevious
            equation (0.0121 vs. 0.0117), the smaller adjusted r-squared value
            (0.6717 vs. 0.8529)suggests that more time invested in improving
            reduction in water use per square foot of floor areawill not yield a
            greater gain in OP 21 score (as a percent) than time invested in
            improving reductionin water use per person.
          </p>
          <pre
            className="bg-gray-100 p-4 rounded-lg overflow-x-auto mt-6"
            style={{ maxWidth: "80vw", margin: "0 auto" }}
          >
            <code className="text-sm">{`lm_model3 <- lm(op_21_percent ~ percentage_reduction_in_total_water_withdrawal_per_unit_of_vegetated_grounds_from_baseline, data = clean3_nooutliers)

coefficients <- coef(lm_model3)
intercept <- coefficients[1]
slope <- coefficients[2]

cat("Equation of the line: y =", round(intercept, 2), "+", round(slope, 2), "* x\\n")`}</code>
          </pre>
          <p>Equation of the line: y = 0.5 + 0.01 * x</p>
          <pre
            className="bg-gray-100 p-4 rounded-lg overflow-x-auto mt-6"
            style={{ maxWidth: "80vw", margin: "0 auto" }}
          >
            <code className="text-sm">{`clean3_nooutliers |>
ggplot(aes(y=op_21_percent, x=percentage_reduction_in_total_water_withdrawal_per_unit_of_vegetated_grounds_from_baseline))  +
  geom_point(aes(color = risk_group)) +
  geom_smooth(method = "lm", se = FALSE, color = scales::alpha("black", 0.4), linetype = "dashed") +  
  geom_text_repel(aes(
    label = institution,
    fontface = ifelse(institution == "St. Thomas", "bold", "plain")
  ),
  size = 3,
  color = ifelse(clean3_nooutliers$institution == "St. Thomas", "purple", "gray20")) +
  labs(
    title = "Water Use Score by Reduction in Total Water Withdrawal per Acre of Vegetated Grounds",
    x = "Reduction in Total Water Withdrawal Per Acre of Vegetated Grounds (percentage)",
    y = "Water Use Score (%)",
    color = "Physical Risk Quantity"
  ) +
  scale_color_manual(values = c("darkgreen", "#CD9600", "red", "gray20"), 
  labels = c("Low/Low to Medium", "Medium/High", "High/Extremely High")) +
  theme_minimal() +  
  theme(
    plot.title = element_text(size = 10, face = "bold", hjust = 0.5, margin = margin(b = 20)),
    axis.title.y = element_text(size = 8, face = "bold", margin = margin(r = 20)),  
    axis.title.x = element_text(size = 8, face = "bold", margin = margin(t = 10)),
    
    legend.position = "bottom",
    
    legend.text = element_text(size = 8, face = "bold"),
    legend.title = element_text(size = 10, face = "bold"),
    
    legend.title.align = 0.5
  )`}</code>
          </pre>
          <div className="mt-6 mb-6">
            <img
              src="/screenshots/pic20.png" // Absolute path to the screenshot
              alt="Summary Statistics Screenshot"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
          <pre
            className="bg-gray-100 p-4 rounded-lg overflow-x-auto mt-6"
            style={{ maxWidth: "80vw", margin: "0 auto" }}
          >
            <code className="text-sm">{`summary(lm_model3)`}</code>
          </pre>
          <div className="mt-6 mb-6">
            <img
              src="/screenshots/pic21.png" // Absolute path to the screenshot
              alt="Summary Statistics Screenshot"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
          <p>
            The last scatter plot graphs a school's OP 21 score against their
            percentage reduction in potable water use per acre of vegetated
            grounds. St. Thomas' percentage reduction lags behind some of the
            schools, but not as many as the previous graphs. The line of best
            fit has the equation `y= 0.0105x + 0.5045`, indicating that for a 1
            unit increase in the percentage reduction in potable water use per
            acre of vegetated grounds, the model predicts an increase of 0.0105
            in the water use score percent (with both coefficients of the
            equation being statistically significant). The adjusted r-squared
            value of 0.4652 indicates a strong positive correlation between the
            x and y variables such that 46.52% of the variability in the water
            use score (as a percent) is explained by the model using percentage
            reduction in potable water use per acre of vegetated grounds as a
            predictor. This model suggests that St. Thomas stands to gain from
            investing resources in further reduction of potable water use per
            square foot of floor area, as other institutions in the two groups
            were always awarded higher scores with greater reduction (however,
            it should be noted that schools also received higher scores with
            less reduction). The slightly smaller slope (0.0105 vs. 0.0123 vs.
            0.0117) and much lower adjusted r-squared value (0.4652 vs. 0.6706
            vs. 0.8529) of this equation than the previous equations suggests
            that more time invested in improving reduction in water use per acre
            of vegetated grounds will not yield a greater gain in OP 21 score
            (as a percent) than the other percentage reduction variables.
          </p>
          <p>
            The goal of the final set of visualizations is to see exactly where
            the University of St. Thomas linesup among the Catholic Benchmark
            Institutions for the three variables we chose to analyze. Thesethree
            bar charts show the percent change of water use arranged in numeric
            order with St. Thomashighlighted in purple, making it easy to see
            where St. Thomas stands among its peers
          </p>
          <pre
            className="bg-gray-100 p-4 rounded-lg overflow-x-auto mt-6"
            style={{ maxWidth: "80vw", margin: "0 auto" }}
          >
            <code className="text-sm">{`clean3 <- clean2 |>
  filter(institution %in% catholic_benchmark_institutions) |>
  mutate(
  percentage_reduction_in_potable_water_use_per_weighted_campus_user_from_baseline = percentage_reduction_in_potable_water_use_per_weighted_campus_user_from_baseline * 100,
    label_color = ifelse(institution == "University of St. Thomas", "purple", "gray30")
  )

ggplot(clean3, aes(
  y = reorder(institution, percentage_reduction_in_potable_water_use_per_weighted_campus_user_from_baseline),
  x = percentage_reduction_in_potable_water_use_per_weighted_campus_user_from_baseline,
)) +
  geom_bar(stat = "identity", fill = "blue3") +
  labs(y = "Institution", x = "Percentage Reduction", title = "Reduction in Water Use Per Campus User From Baseline Year") +
  scale_x_continuous(breaks = seq(-20, 100, by = 10)) +
  theme_minimal() +
  theme(
        plot.title = element_text(size = 12, face = "bold", hjust = 0.5, margin = margin(b = 20)),
    plot.title.position = "plot",
    axis.title.y = element_text(size = 10, face = "bold", margin = margin(r = 20)),  
    axis.title.x = element_text(size = 10, face = "bold", margin = margin(t = 10)),
    
    axis.text.y = element_text(color = clean3 |> arrange(percentage_reduction_in_potable_water_use_per_weighted_campus_user_from_baseline) |> pull(label_color))
  )`}</code>
          </pre>
          <div className="mt-6 mb-6">
            <img
              src="/screenshots/pic22.png" // Absolute path to the screenshot
              alt="Summary Statistics Screenshot"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
          <p>
            This bar chart shows the percent change in water use per weighted
            campus user from the baselineyear to the performance year for
            schools in the Catholic Benchmark Institutions group. Mostschools in
            this group were able to decrease their water use per weighted campus
            user with someschools cutting their water use by more than half.
            Only two schools actually increased their wateruse, having a
            negative percentage reduction in water use. One of these two schools
            is the Universityof St.Thomas. They had the second worst change in
            water use per campus users out of all otherschools in this group.
            Their change in water use in this category was an increase of about
            1% fromthe baseline year to the performance year.Although a 1%
            change is not a dramatic increase, it is certainly the wrong
            direction to go for aschool that wants to become sustainable. The
            increase in water use per campus user is the part ofthe reason why
            the St. Thomas received such a low OP-21 water use score and was put
            into the“High” Physical Risk Quantity group. If St. Thomas wants to
            become a sustainable institution andreceive a higher AASHE STARS
            rating they will need to put more effort towards decreasing wateruse
            per campus user and increasing their water use score.
          </p>
          <pre
            className="bg-gray-100 p-4 rounded-lg overflow-x-auto mt-6"
            style={{ maxWidth: "80vw", margin: "0 auto" }}
          >
            <code className="text-sm">{`clean3 <- clean2 |>
  filter(institution %in% catholic_benchmark_institutions) |>
  mutate(
    label_color = ifelse(institution == "University of St. Thomas", "purple", "gray30")
  )

ggplot(clean3, aes(
  y = reorder(institution, percentage_reduction_in_total_water_withdrawal_per_unit_of_vegetated_grounds_from_baseline),
  x = percentage_reduction_in_total_water_withdrawal_per_unit_of_vegetated_grounds_from_baseline,
)) +
  geom_bar(stat = "identity", fill = "blue3") +
  labs(y = "Institution", x = "Percentage Reduction", title = "Reduction in Water Use Per Unit of Vegetated Grounds From Baseline Year") +
  scale_x_continuous(breaks = seq(-20, 100, by = 10)) +
  theme_minimal() +
  theme(
        plot.title = element_text(size = 12, face = "bold", hjust = 0.5, margin = margin(b = 20)),
    plot.title.position = "plot",
    axis.title.y = element_text(size = 10, face = "bold", margin = margin(r = 20)),  
    axis.title.x = element_text(size = 10, face = "bold", margin = margin(t = 10)),
    
    axis.text.y = element_text(color = clean3 |> arrange(percentage_reduction_in_total_water_withdrawal_per_unit_of_vegetated_grounds_from_baseline) |> pull(label_color))
  )`}</code>
          </pre>
          <div className="mt-6 mb-6">
            <img
              src="/screenshots/pic23.png" // Absolute path to the screenshot
              alt="Summary Statistics Screenshot"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
          <p>
            This bar chart shows the percent change in water use per unit of
            vegetated grounds from baseline year to performance year. Most
            institutions from the Catholic Benchmark Institutions group were
            able to decrease their water use per area of vegetated grounds,
            though a few had an increase in this category. The University of St.
            Thomas was able to decrease water use for this metric, but of the
            institutions that made a decrease, St. Thomas had the smallest
            change. The seven other institutions that had a decrease were able
            to reduce water use per unit of vegetated grounds by more than 15%
            with one institution decreasing by almost 60%. St.Thomas, on the
            other hand, produced a decrease of only 8.5%. Although the
            University of St. Thomas was able to decrease water use per unit of
            vegetated grounds from the baseline year to the performance year,
            the decrease was not as large as most other schools from the
            Catholic Benchmark Institutions. This is a category that St. Thomas
            will surely need to put more focus on if they wish to receive a
            higher water use score.
          </p>
          <pre
            className="bg-gray-100 p-4 rounded-lg overflow-x-auto mt-6"
            style={{ maxWidth: "80vw", margin: "0 auto" }}
          >
            <code className="text-sm">{`clean3 <- clean2 |>
  filter(institution %in% catholic_benchmark_institutions) |>
  mutate(
  percentage_reduction_in_potable_water_use_per_unit_of_floor_area_from_baseline = percentage_reduction_in_potable_water_use_per_unit_of_floor_area_from_baseline * 100,
    label_color = ifelse(institution == "University of St. Thomas", "purple", "gray30")
  )

ggplot(clean3, aes(
  y = reorder(institution, percentage_reduction_in_potable_water_use_per_unit_of_floor_area_from_baseline),
  x = percentage_reduction_in_potable_water_use_per_unit_of_floor_area_from_baseline,
)) +
  geom_bar(stat = "identity", fill = "blue3") +
  labs(y = "Institution", x = "Percentage Reduction", title = "Reduction in Water Use Per Unit of Floor Area From Baseline Year") +
  scale_x_continuous(breaks = seq(-20, 100, by = 10)) +
  theme_minimal() +
  theme(
        plot.title = element_text(size = 12, face = "bold", hjust = 0.5, margin = margin(b = 20)),
    plot.title.position = "plot",
    axis.title.y = element_text(size = 10, face = "bold", margin = margin(r = 20)),  
    axis.title.x = element_text(size = 10, face = "bold", margin = margin(t = 10)),
    
    axis.text.y = element_text(color = clean3 |> arrange(percentage_reduction_in_potable_water_use_per_unit_of_floor_area_from_baseline) |> pull(label_color))
  )`}</code>
          </pre>
          <div className="mt-6 mb-6">
            <img
              src="/screenshots/pic24.png" // Absolute path to the screenshot
              alt="Summary Statistics Screenshot"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
          <p>
            The final bar chart shows the change in water use per unit of floor
            from the baseline year to the performance year for institutions in
            the Catholic Benchmark Institutions group. Compared to the ten other
            institutions here, the University of St. Thomas has the third
            poorest percentage change for this category. St. Thomas still had a
            much larger percentage decrease in this category than it had in
            other categories with a 21.2% reduction in water use per unit of
            floor area, but the mean percentage reduction in this category for
            Catholic Benchmark Institutions was substantially higher at 37.9%.
            The University of St. Thomas was able to decrease their water use
            per unit of floor area by a fair amount, but they are still falling
            behind other Catholic Benchmark Institutions in this category. To
            receive a higher water use score in the future and become a more
            sustainable institution, St. Thomas should seek to reduce their
            water use per unit of floor area.
          </p>
          <p>
            The analysis of the AASHE STARS water use data has allowed us to
            identify, compare, and predict the OP-21 credit score for St. Thomas
            and other benchmark institutions of interest. By studying the three
            underlying parts that comprise a school's OP 21 score, a better
            understanding of how an institution such as St. Thomas can improve
            their performance was gained. Further examination of three important
            variables regarding reduction in water use was important for
            discovering why St. Thomas's OP-21 water use score is so low.
            Several data visualizations were created from the variables
            "reduction in water use per weighted campus user from baseline",
            "reduction in water use per unit of vegetated ground from baseline",
            and "reduction in water use per unit of floor area from baseline".
            These visualizations effectively illustrated that St. Thomas
            consistently lags behind their peers in these three categories. For
            change in water use compared to the number of weighted campus users,
            St. Thomas actually saw an increase in water use from the baseline
            year. The creation of simple linear regression models for the three
            variables against OP-21 score allowed for understanding of which
            variables had higher predictive power for an institutions OP-21
            score. All models had close to the same slope, but the model using
            water use per weighted campus user had by far the highest adjusted
            R-squared value, indicating that St. Thomas should put the greatest
            amount of focus in this category. To receive a higher OP-21 water
            use score, a higher AASHE STARS rating, and ultimately become a more
            sustainable institution, St. Thomas should seek to reduce their
            water use per unit of floor area, their water use per unit of
            vegetated grounds, and most importantly their water use per number
            of weighted campus users.
          </p>

          {/* Code block */}

          {/* Code block */}

          {/* Code block */}
        </div>
      </div>
    </div>
  );
}
