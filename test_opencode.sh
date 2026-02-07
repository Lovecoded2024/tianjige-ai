#!/bin/bash
cd ~/.openclaw/workspace/tianjige

echo "测试 OpenCode..."
~/.opencode/bin/opencode run --model "openrouter/anthropic/claude-opus-4-20240506" "你好，请简单回复" --timeout 60
