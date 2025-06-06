import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";

export default function EmailTemplate({
  username,
  type,
  data
}) {
  if (type === "monthly-report") {
    return (
      <Html>
        <Head />
        <Preview>Your Monthly Financial Report</Preview>
        <Body style={styles.body}>
          <Container style={styles.container}>
                        <Section style={styles.header}>
              <Heading style={styles.headerTitle}>FinSeek</Heading>
            </Section>
            
            <Heading style={styles.title}>Monthly Financial Report</Heading>

            <Text style={styles.text}>Hello {username},</Text>
            <Text style={styles.text}>
              Here&rsquo;s your financial summary for {data?.month}:
            </Text>

            {/* Main Stats */}
            <Section style={styles.statsContainer}>
              <div style={styles.stat}>
                <Text style={styles.text}>Total Income</Text>
                <Text style={{ ...styles.heading, color: "green" }}>${data?.stats.totalIncome.toFixed(2)}</Text>
              </div>
              <div style={styles.stat}>
                <Text style={styles.text}>Total Expenses</Text>
                <Text style={{...styles.heading, color: "red"}}>${data?.stats.totalExpenses.toFixed(2)}</Text>
              </div>
              <div style={styles.stat}>
                <Text style={styles.text}>Net</Text>
                <Text style={styles.heading}>
                  ${(data?.stats.totalIncome - data?.stats.totalExpenses).toFixed(2)}
                </Text>
              </div>
            </Section>

            {/* Category Breakdown */}
            {data?.stats?.byCategory && (
              <Section style={styles.section}>
                <Heading style={styles.heading}>Expenses by Category</Heading>
                {Object.entries(data?.stats.byCategory).map(
                  ([category, amount]) => (
                    <div key={category} style={styles.row}>
                      <Text style={styles.text}>{category}{"  "}</Text>
                      <Text style={styles.text}>${amount.toFixed(2)}</Text>
                    </div>
                  )
                )}
              </Section>
            )}

            {/* AI Insights */}
            {data?.insights && (
              <Section style={styles.section}>
                <Heading style={styles.heading}>FinSeek Insights</Heading>
                {data.insights.map((insight, index) => (
                  <Text key={index} style={styles.text}>
                    • {insight}
                  </Text>
                ))}
              </Section>
            )}

            <Text style={styles.footer}>
              Thank you for using FinSeek. Keep tracking your finances for better
              financial health!
            </Text>
          </Container>
        </Body>
      </Html>
    );
  }

  if (type === "budget-alert") {
    return (
      <Html>
        <Head />
        <Preview>You’re approaching your budget limit</Preview>
        <Body style={styles.body}>
          <Container style={styles.container}>
            {/* Header */}
            <Section style={styles.header}>
              <Heading style={styles.headerTitle}>FinSeek</Heading>
            </Section>

            {/* Content */}
            <Heading style={styles.title}>Budget Alert</Heading>
            <Text style={styles.text}>Hi {username},</Text>
            <Text style={styles.text}>
              You've used <strong style={{ color: "red" }}>{data?.percentageUsed.toFixed(1)}%</strong> of your monthly budget.
            </Text>

                        {/* Progress bar */}
            <div style={styles.progressBar}>
              <div
                style={{
                  ...styles.progress,
                  width: `${Math.min(data.percentageUsed, 100)}%`,
                  backgroundColor: data.percentageUsed >= 90 ? '#ef4444' : data.percentageUsed >= 75 ? '#f59e0b' : colors.primary,
                }}
              />
            </div>


            {/* Stats Section */}
            <Section style={styles.statsContainer}>
              <div style={styles.stat}>
                <Text style={styles.statLabel}>Budget Amount</Text>
                <Text style={styles.statValue}>${data?.budgetAmount}</Text>
              </div>
              <div style={styles.stat}>
                <Text style={styles.statLabel}>Spent So Far</Text>
                <Text style={styles.statValue}>${data?.totalExpenses}</Text>
              </div>
              <div style={styles.stat}>
                <Text style={styles.statLabel}>Remaining</Text>
                <Text style={styles.statValue}>${data?.budgetAmount - data?.totalExpenses}</Text>
              </div>
            </Section>

            {/* Footer */}
            <Text
              style={{
                ...styles.text,
                fontSize: "13px",
                marginTop: "32px",
                color: "#9ca3af",
                textAlign: "center",
              }}
            >
              This is an automated alert from FinSeek.
            </Text>
          </Container>
        </Body>
      </Html>
    );
  }
}

const colors = {
  background: "#f3f4f6",
  cardBackground: "#ffffff",
  primary: "#10b981", // emerald
  primaryDark: "#059669",
  textPrimary: "#1f2937",
  textSecondary: "#4b5563",
  border: "#e5e7eb",
  statBg: "#f9fafb",
  headerBg: "#10b981",
};

const styles = {
  body: {
    backgroundColor: colors.background,
    fontFamily: "-apple-system, BlinkMacSystemFont, sans-serif",
    padding: "20px",
  },
  container: {
    backgroundColor: colors.cardBackground,
    padding: "32px",
    borderRadius: "8px",
    maxWidth: "600px",
    margin: "0 auto",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.05)",
  },
  header: {
    padding: "12px 24px",
    borderRadius: "6px",
    marginBottom: "24px",
    textAlign: "center",
  },
  headerTitle: {
  fontSize: "28px",
  fontWeight: 800, // equivalent to font-extrabold
  letterSpacing: "-0.05em", // tracking-tighter
  paddingRight: "0.5rem", // pr-2
  paddingBottom: "0.5rem", // pb-2
  color: "transparent",
  backgroundImage: "linear-gradient(to bottom right, #3b82f6, #8b5cf6)", // from-blue-500 to-purple-600
  backgroundClip: "text",
  WebkitBackgroundClip: "text", // required for Safari
  WebkitTextFillColor: "transparent", // required for Safari
  textAlign: "center",
  margin: 0,

  },
  title: {
    fontSize: "26px",
    fontWeight: "700",
    color: colors.textPrimary,
    textAlign: "center",
    marginBottom: "20px",
  },
  text: {
    fontSize: "16px",
    color: colors.textSecondary,
    lineHeight: "24px",
    margin: "8px 0",
  },
  statsContainer: {
    marginTop: "24px",
    marginBottom: "24px",
  },
  stat: {
    padding: "12px 16px",
    backgroundColor: colors.statBg,
    border: `1px solid ${colors.border}`,
    borderRadius: "6px",
    marginBottom: "12px",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.05)",
  },
  statLabel: {
    fontSize: "14px",
    color: "#6b7280",
    marginBottom: "4px",
  },
  statValue: {
    fontSize: "18px",
    fontWeight: "600",
    color: colors.textPrimary,
  },
  progressBar: {
    height: "12px",
    width: "100%",
    backgroundColor: "#e5e7eb",
    borderRadius: "6px",
    overflow: "hidden",
    marginTop: "16px",
  },
  progress: {
    height: "100%",
    borderRadius: "6px",
  },
  row: {
    display: "flex",
    justifyContent: "space-between",
    padding: "12px 0",
    borderBottom: "1px solid #e5e7eb",
  },
  footer: {
    color: "#6b7280",
    fontSize: "14px",
    textAlign: "center",
    marginTop: "32px",
    paddingTop: "16px",
    borderTop: "1px solid #e5e7eb",
  },
  section: {
    marginTop: "32px",
    padding: "20px",
    backgroundColor: "#f9fafb",
    borderRadius: "5px",
    border: "1px solid #e5e7eb",
  }
};
