<%@ params(items: List<String>, title: String) %>
<%@ params(showIndex: boolean = true) %>

<html>
  <head>
    <title>${title}</title>
    <style>
      .item {
        margin: 10px 0;
        padding: 5px;
        border: 1px solid #ccc;
      }
      .index {
        font-weight: bold;
        color: #666;
      }
    </style>
  </head>
  <body>
    <h1>${title}</h1>

    <% if (items != null && !items.isEmpty()) { %>
      <ul>
        <% for (item in items index i) { %>
          <li class="item">
            <% if (showIndex) { %>
              <span class="index">${i + 1}.</span>
            <% } %>
            ${item}
          </li>
        <% } %>
      </ul>
    <% } else { %>
      <p>No items to display.</p>
    <% } %>

    <div>
      <p>Total items: ${items?.size() ?: 0}</p>
      <p>Generated at: ${new java.util.Date()}</p>
    </div>

    <% if (items != null) { %>
      <div>
        <h2>Item Details</h2>
        <% for (item in items) { %>
          <div class="item-detail">
            <strong>${item}</strong>
            <span>Length: ${item.length()}</span>
          </div>
        <% } %>
      </div>
    <% } %>
  </body>
</html>