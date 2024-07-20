package main

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

func main() {
	r := gin.Default()
	r.GET("/ping", func(c *gin.Context) {
		content := []byte("thisistestdata")
		c.Header("Content-Description", "File Transfer")
		c.Header("Content-Disposition", "attachment; filename=thisistestdata.txt")
		c.Header("Content-Type", "application/octet-stream")
		c.Header("Content-Transfer-Encoding", "binary")
		c.Header("Expires", "0")
		c.Header("Cache-Control", "must-revalidate")
		c.Header("Pragma", "public")
		c.Data(http.StatusOK, "text/plain", content)
	})
	r.Run() // 0.0.0.0:8080 でサーバーを立てます。アクセスすると"thisistestdata.txt"が自動的にDLされます
}
